import "./index.css";
import { PhoneBook } from "./generated/phonebook_pb";

document.querySelector("#root")!.innerHTML = `
<div class="content">
  <h1>Vanilla Rsbuild</h1>
  <p>Start building amazing things with Rsbuild.</p>
</div>
`;

fetch("/proto")
	.then((response) => response.arrayBuffer())
	.then((buffer) => PhoneBook.deserializeBinary(new Uint8Array(buffer)))
	.then((phoneBook) => {
		phoneBook.getContactList().map((contact) => {
			console.log("firstName", contact.getFirstName());
			console.log("latName", contact.getLastName());
			console.log("getEmail", contact.getEmail());
			console.log("getPhoneNumber", contact.getPhoneNumber());
			console.log("getIsBlocked", contact.getIsBlocked());
			console.log("getIsFavorite", contact.getIsFavorite());
			console.log(
				"social media",
				contact.getSocialPlatformsList().map((social) => {
					return [social.getPlatform()];
				}),
			);
		});
	})
	.catch((error) => console.error("Error:", error));
