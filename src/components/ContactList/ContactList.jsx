import s from "./ContactList.module.css";
import Contact from "../Contact/Contact";
import { useSelector } from "react-redux";
import { selectAllContacts } from "../../redux/contacts/selectors";

const ContactList = () => {
  const contacts = useSelector(selectAllContacts);

  return (
    <ul className={s.list}>
      {contacts.map(({ id, contact }) => (
        <li key={id}>
          <Contact id={id} contact={contact} />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
