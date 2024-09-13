import { Contact } from "./generated/contact_pb";
import { EmergencyContactDetails } from "./generated/emergencycontactdetails_pb";
import { PhoneBook } from "./generated/phonebook_pb";
import { SocialPlatform } from "./generated/socialplatform_pb";
import { myPhoneBook } from "./phoneBook";

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
emergencyContact.setRelationship(EmergencyContactDetails.Relationships.FRIEND);

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

const serializedPhoneBook = phoneBook.serializeBinary();
const deserializedPhoneBook = PhoneBook.deserializeBinary(serializedPhoneBook);

console.log("\n Serialized Bytes of object: ", serializedPhoneBook);
console.log(
	"\n Deserialized object: ",
	JSON.stringify(deserializedPhoneBook.toObject()),
);
