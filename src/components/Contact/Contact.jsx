import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";

import s from "./Contact.module.css";

const Contact = ({ contact }) => {
  const dispatch = useDispatch();

  return (
    <li>
      <p>
        {contact.name}: {contact.number}
      </p>
      <button onClick={() => dispatch(deleteContact(contact.id))}>Del</button>
    </li>
  );
};

export default Contact;
