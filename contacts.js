const fs = require("fs").promises;
const path = require("path");
const { nanoid } = require("nanoid");

const contactsPath = path.join(__dirname, "db/contacts.json");

// functions for working with data

async function listContacts() {
  // return array of contacts
  const data = await fs.readFile(contactsPath);
  return JSON.parse(data);
}
async function addContact(params) {
  // create new contact object
  const allData = await listContacts(); //
  const newContact = { id: nanoid(), ...params };
  const newContactList = [...allData, newContact];

  await fs.writeFile(contactsPath, JSON.stringify(newContactList, null, 2));
  return newContact;
}
async function getContactById({ id }) {
  const allData = await listContacts();
  const targetContact = allData.find((contact) => contact.id === id);
  return targetContact || null;
}
async function removeContact({ id }) {
  // delete contact object by ID
  const allData = await listContacts();

  const target = allData.findIndex((contact) => contact.id === id);
  const removed = allData.splice(target, 1);
  await fs.writeFile(contactsPath, JSON.stringify(allData, null, 2));
  return removed;
}

module.exports = {
  listContacts,
  addContact,
  getContactById,
  removeContact,
};
