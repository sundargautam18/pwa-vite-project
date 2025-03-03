// src/idb.js
import { openDB } from "idb";

const dbPromise = openDB("contacts-db", 1, {
  upgrade(db) {
    db.createObjectStore("contacts", { keyPath: "id", autoIncrement: true });
  },
});

export async function addContact(contact) {
  return (await dbPromise).add("contacts", contact);
}

export async function getAllContacts() {
  return (await dbPromise).getAll("contacts");
}

export async function deleteAllContacts() {
  return (await dbPromise).clear("contacts");
}
