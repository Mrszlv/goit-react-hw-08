import { Formik, Form, Field } from "formik";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contacts/operations";
import s from "./ContactEditor.module.css";

const ContactEditor = () => {
  const initForm = { name: "", number: "" };
  const dispatch = useDispatch();

  const handleSubmit = (values, options) => {
    dispatch(addContact(values));
    options.resetForm();
  };

  return (
    <Formik initialValues={initForm} onSubmit={handleSubmit}>
      <Form className={s.form}>
        <label>
          Name
          <Field type="text" name="name" />
        </label>
        <label>
          Phone
          <Field type="text" name="number" />
        </label>
        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
};

export default ContactEditor;
