import fs from "node:fs";
import { serve } from "@hono/node-server";
import { serveStatic } from "@hono/node-server/serve-static";
// import { serve } from "bun";
import { Hono } from "hono";
import { stream } from "hono/streaming";
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

const port = 3000;
console.log(`Server is running on port ${port}`);

serve({
	fetch: app.fetch,
	port,
});
