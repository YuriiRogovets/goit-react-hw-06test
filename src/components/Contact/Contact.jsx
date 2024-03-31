import css from "./Contact.module.css";
import { IoPersonSharp } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";

const Contact = ({ name, number, id, handleDelete }) => {
  return (
    <div className={css.contactWrap}>
      <div className={css.contactData}>
        <p className={css.contactName}>
          <IoPersonSharp className={css.contactIcon} />
          {name}
        </p>
        <p className={css.contactPhone}>
          <FaPhoneAlt className={css.contactIcon} />
          {number}
        </p>
      </div>
      <button className={css.contactBtn} onClick={() => handleDelete(id)}>
        Delete
      </button>
    </div>
  );
};

export default Contact;
