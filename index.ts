import fs from "node:fs";
import { serve } from "@hono/node-server";
import { serveStatic } from "@hono/node-server/serve-static";
import { Hono } from "hono";
import type { StreamingApi } from "hono/dist/types/utils/stream";
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

app.get("/proto", (c) => {
	return stream(c, async (stream) => {
		stream.onAbort(() => console.log("Aborted!"));
		await stream.write(getData());
	});
});

function obfuscate(key: string) {
	return obfuscationMap.get(key) ?? key;
}

async function serializeAnObject(
	stream: StreamingApi,
	object: {
		[key: string]: any;
	},
) {
	const entries = Object.entries(object);
	for (const [key, value] of entries) {
		await stream.write(`${obfuscate(key)}÷${value}¬`);
	}
	await stream.write("~");
}

app.get("/feed", (c) => {
	return stream(c, async (stream) => {
		stream.onAbort(() => console.log("Aborted!"));

		for (const league of leagues) {
			await serializeAnObject(stream, league);

			const eventIds = league2eventMap.get(league.ID) ?? [];
			for (const eventId of eventIds) {
				const event = events.find((event) => event.ORIGINAL_ID === eventId);
				if (!event) continue;

				await serializeAnObject(stream, event);
			}
		}

		await stream.close();
	});
});

app.get("/json", (c) => {
	return c.json(
		leagues.map((league) => ({
			...league,
			events: events.filter((event) =>
				(league2eventMap.get(league.ID) ?? []).includes(event.ORIGINAL_ID),
			),
		})),
	);
});

const port = 3000;
console.log(`Server is running on port ${port}`);

serve({
	fetch: app.fetch,
	port,
});
