import { Formik, Form, Field } from "formik";
import { logIn } from "../../redux/auth/operations";
import { useDispatch } from "react-redux";
import s from "./LoginForm.module.css";

const initForm = {
  email: "",
  password: "",
};

const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    dispatch(logIn(values));
    resetForm();
  };
  return (
    <Formik initialValues={initForm} onSubmit={handleSubmit}>
      <Form>
        <Field type="email" name="email" placeholder="Enter email..." />
        <Field
          type="password"
          name="password"
          placeholder="Enter password..."
        />
        <button type="submit">Log In</button>
      </Form>
    </Formik>
  );
};

export default LoginForm;
