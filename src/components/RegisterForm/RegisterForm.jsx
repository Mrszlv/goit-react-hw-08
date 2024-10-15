import { Formik, Form, Field } from "formik";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";
import s from "./RegisterForm.module.css";

const initForm = {
  name: "",
  email: "",
  password: "",
};

const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    dispatch(register(values));
    resetForm();
  };

  return (
    <Formik initialValues={initForm} onSubmit={handleSubmit}>
      <Form>
        <Field type="text" name="name" placeholder="Enter name..." />
        <Field type="email" name="email" placeholder="Enter email..." />
        <Field type="password" name="password" placeholder="Enter password" />
        <button type="submit">Register</button>
      </Form>
    </Formik>
  );
};

export default RegisterForm;
