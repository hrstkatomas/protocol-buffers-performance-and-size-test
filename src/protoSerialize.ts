const { Contact } = require("./generated/contact_pb");
const {
	EmergencyContactDetails,
} = require("./generated/emergencycontactdetails_pb");
const { PhoneBook } = require("./generated/phonebook_pb");
const { SocialPlatform } = require("./generated/socialplatform_pb");
import { myPhoneBook } from "./phoneBook";

export function getData(): Uint8Array {
	const [phoneBookContactOne] = myPhoneBook.contacts;

	const socialPlatForm = new SocialPlatform();
	socialPlatForm.setPlatform(SocialPlatform.SocialPlatformOptions.WHATSAPP);
	socialPlatForm.setProfile(phoneBookContactOne.socialPlatForms[0].profile);
	if (phoneBookContactOne.socialPlatForms[0].profileUrl) {
		socialPlatForm.setProfileUrl(
			phoneBookContactOne.socialPlatForms[0].profileUrl,
		);
	}

	const emergencyContact = new EmergencyContactDetails();
	emergencyContact.setRelationship(
		EmergencyContactDetails.Relationships.FRIEND,
	);

	const contactOne = new Contact();
	contactOne.setFirstName(phoneBookContactOne.firstName);
	contactOne.setLastName(phoneBookContactOne.lastName);
	contactOne.setEmail(phoneBookContactOne.email);
	contactOne.setPhoneNumber(phoneBookContactOne.phoneNumber);
	contactOne.setIsBlocked(phoneBookContactOne.isBlocked);
	contactOne.setIsFavorite(phoneBookContactOne.isFavorite);
	contactOne.addSocialPlatforms(socialPlatForm);
	contactOne.setEmergencyContact(emergencyContact);

	const phoneBook = new PhoneBook();
	phoneBook.addContact(contactOne);

	return phoneBook.serializeBinary();
}
