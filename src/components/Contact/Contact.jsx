import { useDispatch } from "react-redux";
import s from "./Contact.module.css";
import { deleteContact } from "../../redux/contacts/operations";

const Contact = ({ contact }) => {
  const dispatch = useDispatch();

  return (
    <li className={s.item}>
      <p>
        {contact.name}: {contact.phone}{" "}
      </p>
      <button onClick={() => dispatch(deleteContact(contact.id))}>Del</button>
    </li>
  );
};

export default Contact;
