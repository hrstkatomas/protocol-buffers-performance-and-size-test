import fs from "node:fs";
import { serve } from "@hono/node-server";
import { serveStatic } from "@hono/node-server/serve-static";
import { Hono } from "hono";

const app = new Hono();
app.use("/static/*", serveStatic({ root: "./dist" }));

app.get("/", (c) => {
	const data = fs.readFileSync("./dist/index.html", "utf8");
	return c.html(data);
});

const port = 3000;
console.log(`Server is running on port ${port}`);

serve({
	fetch: app.fetch,
	port,
});
