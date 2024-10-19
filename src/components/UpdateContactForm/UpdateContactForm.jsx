import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { updateContact } from "../../redux/contacts/operations";
import s from "./UpdateContactForm.module.css";

import { IoCloseSharp } from "react-icons/io5";
import { FiCheck } from "react-icons/fi";

const contactSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Min 3 characters")
    .max(50, "Max 50 characters")
    .required("Required field!"),
  number: Yup.string()
    .matches(
      /^[0-9()+\-\s]+$/,
      "The phone number can only contain numbers and symbols +, -, (, ) and spaces') // Numbers and symbols are allowed"
    )
    .min(3, "Min 3 characters")
    .max(50, "Max 50 characters")
    .required("Required fild!"),
});

const UpdateContactForm = ({ contact, onClose }) => {
  const dispatch = useDispatch();

  const handleUpdate = (values) => {
    dispatch(updateContact({ id: contact.id, ...values }));
    onClose();
  };

  return (
    <Formik
      initialValues={{ name: contact.name, number: contact.number }}
      validationSchema={contactSchema}
      onSubmit={handleUpdate}
    >
      {({ handleChange, values }) => (
        <Form className={s.form}>
          <label className={s.label}>
            New name
            <Field
              type="text"
              name="name"
              id="name"
              value={values.name}
              onChange={handleChange}
              placeholder="Enter new name..."
              className={s.field}
            />
            <ErrorMessage name="name" component="span" />
          </label>
          <label className={s.label}>
            New Number
            <Field
              type="text"
              name="number"
              id="number"
              value={values.number}
              onChange={handleChange}
              placeholder="Enter new number..."
              className={s.field}
            />
            <ErrorMessage name="number" component="span" />
          </label>
          <div className={s.wrappBtn}>
            <button type="submit" className={s.btnCheck}>
              <FiCheck />
            </button>
            <button onClick={onClose} className={s.btn}>
              <IoCloseSharp />
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default UpdateContactForm;
