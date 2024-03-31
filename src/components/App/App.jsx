import "./App.module.css";

import contactsData from "../../Data/contactsData.json";
import ContactForm from "../ContactForm/ContactForm";
import SearchBox from "../SearchBox/SearchBox";
import ContactList from "../ContactList/ContactList";
import { useState, useEffect } from "react";

function App() {
  const [searchName, setSearchName] = useState("");
  const [contacts, setContacts] = useState(() => {
    const savedContacts = window.localStorage.getItem("saved-contacts");
    if (savedContacts !== null) {
      return JSON.parse(savedContacts);
    }
    return contactsData;
  });

  useEffect(() => {
    window.localStorage.setItem("saved-contacts", JSON.stringify(contacts));
  }, [contacts]);

  const addContact = (contact) => {
    setContacts((prevState) => {
      return [...prevState, contact];
    });
  };

  const handleDelete = (id) => {
    setContacts((prevContacts) => {
      return prevContacts.filter((item) => item.id !== id);
    });
  };

  const searchContact = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(searchName.toLowerCase())
  );

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm addCont={addContact} />
      <SearchBox value={searchName} onSearch={setSearchName} />
      <ContactList contacts={searchContact} handleDelete={handleDelete} />
    </div>
  );
}

export default App;
