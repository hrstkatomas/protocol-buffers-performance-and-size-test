import fs from "node:fs";
import { serve } from "@hono/node-server";
import { serveStatic } from "@hono/node-server/serve-static";
import { Hono } from "hono";
import { stream } from "hono/streaming";
import { events } from "./src/fixtures/events";
import { league2eventMap } from "./src/fixtures/league2eventMap";
import { leagues } from "./src/fixtures/leagues";
import { obfuscationMap } from "./src/fixtures/obfuscationMap";
import { getData } from "./src/protoSerialize";

const app = new Hono();
app.use("/static/*", serveStatic({ root: "./dist" }));

app.get("/", (c) => {
	const data = fs.readFileSync("./dist/index.html", "utf8");
	return c.html(data);
});

function compress(str: Uint8Array | string): ReadableStream {
	const stream = new Blob([str]).stream();
	return stream.pipeThrough(new CompressionStream("gzip"));
}

app.get("/proto", (c) => {
	return stream(c, async (stream) => {
		c.res.headers.set("Content-Encoding", "gzip");
		await stream.pipe(compress(getData()));
	});
});

function obfuscate(key: string) {
	return obfuscationMap.get(key) ?? key;
}

function serializeAnObject(object: { [key: string]: any }) {
	const entries = Object.entries(object);
	const srializedObject = entries
		.map(([key, value]) => `${obfuscate(key)}÷${value}¬`)
		.join();
	return `${srializedObject}~`;
}

app.get("/feed", (c) => {
	let output = "";
	for (const league of leagues) {
		output += serializeAnObject(league);

		const eventIds = league2eventMap.get(league.ID) ?? [];
		for (const eventId of eventIds) {
			const event = events.find((event) => event.ORIGINAL_ID === eventId);
			if (!event) continue;
			output += serializeAnObject(event);
		}
	}

	return stream(c, async (stream) => {
		c.res.headers.set("Content-Encoding", "gzip");
		await stream.pipe(compress(output));
	});
});

app.get("/json", (c) => {
	const data = leagues.map((league) => ({
		...league,
		events: events.filter((event) =>
			(league2eventMap.get(league.ID) ?? []).includes(event.ORIGINAL_ID),
		),
	}));

	return stream(c, async (stream) => {
		c.res.headers.set("Content-Encoding", "gzip");
		await stream.pipe(compress(JSON.stringify(data)));
	});
});

const port = 3000;
console.log(`Server is running on port ${port}`);

serve({
	fetch: app.fetch,
	port,
});
