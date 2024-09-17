import "./index.css";
import { EventFeed } from "./generated/eventfeed_pb";

document.querySelector("#root")!.innerHTML = `
<div class="content">
  <h1>Vanilla Rsbuild</h1>
  <p>Start building amazing things with Rsbuild.</p>
</div>
`;

fetch("/proto")
	.then((response) => response.arrayBuffer())
	.then((buffer) => EventFeed.deserializeBinary(new Uint8Array(buffer)))
	.then((data) => console.log(data.toObject()))
	.catch((error) => console.error("Error:", error));

fetch("/feed")
	.then((response) => response.text())
	.then(console.log);

fetch("/json")
	.then((response) => response.json())
	.then(console.log);
