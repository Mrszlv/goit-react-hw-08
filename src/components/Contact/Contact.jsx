import { useDispatch } from "react-redux";

import { deleteContact } from "../../redux/contacts/operations";

import { RiPhoneFill } from "react-icons/ri";
import { IoPerson } from "react-icons/io5";
import { MdDelete } from "react-icons/md";

import s from "./Contact.module.css";

const Contact = ({ contact }) => {
  const dispatch = useDispatch();

  return (
    <li className={s.item}>
      <div className={s.contact}>
        <span className={s.name}>
          {" "}
          <IoPerson /> {contact.name}:
        </span>
        <span className={s.number}>
          {" "}
          <RiPhoneFill /> {contact.number}
        </span>
      </div>
      <button
        className={s.btn}
        onClick={() => dispatch(deleteContact(contact.id))}
      >
        <MdDelete />
      </button>
    </li>
  );
};

export default Contact;
