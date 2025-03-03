// src/AddContactForm.tsx
import { useState, useEffect } from "react";
import { addContact, getAllContacts } from "../idb";

function AddContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contacts, setContacts] = useState<any>([]);

  // Load contacts on component mount
  useEffect(() => {
    const loadContacts = async () => {
      const savedContacts = await getAllContacts();
      setContacts(savedContacts);
    };
    loadContacts();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newContact = { name, email };
    await addContact(newContact);

    // if (navigator.onLine) {
    //   // If online, directly send to server
    //   await fetch("https://your-server.com/api/contacts", {
    //     method: "POST",
    //     headers: { "Content-Type": "application/json" },
    //     body: JSON.stringify([newContact]),
    //   });
    // } else {
    //   alert(
    //     "Contact saved locally. It will be synced when you are back online."
    //   );
    // }

    // Update local state
    setContacts([...contacts, newContact]);
    setName("");
    setEmail("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit">Add Contact</button>
      </form>

      <h2>Added Contacts:</h2>
      <ul>
        {contacts.map((contact, index) => (
          <li key={index}>
            {contact.name} - {contact.email}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AddContactForm;
