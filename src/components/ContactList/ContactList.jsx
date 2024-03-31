import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";

const ContactList = ({ contacts, handleDelete }) => {
  return (
    <ul className={css.contactListWrap}>
      {contacts.map((item) => {
        return (
          <li key={item.id}>
            <Contact
              name={item.name}
              number={item.number}
              id={item.id}
              handleDelete={handleDelete}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default ContactList;
