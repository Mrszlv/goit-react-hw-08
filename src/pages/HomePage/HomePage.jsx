import DocumentTitle from "../../components/DocumentTitle";
import s from "./HomePage.module.css";

const HomePage = () => {
  return (
    <>
      <DocumentTitle>Home</DocumentTitle>
      <div className={s.wrapp}>
        <img
          className={s.img}
          src="https://st2.depositphotos.com/1139310/5382/i/450/depositphotos_53820013-stock-photo-3d-illustration-of-contacts-book.jpg"
          alt="Contact Book"
        />
        <div className={s.textWrapp}>
          <h1 className={s.title}>
            Welcome to the{" "}
            <span className={s.titleSpan}>Contact Manager App</span>{" "}
          </h1>
          <h2 className={s.title}>
            Manage your contacts easyly and efficiently. To get started, log in
            or sign up
          </h2>
          <p className={s.text}>
            The contact book application is a digital tool that serves as a
            modern replacement for the traditional paper note with phone
            numbers. It allows you to store, organize and quickly find contact
            information about your friends, relatives, colleagues and other
            important people.
          </p>
          <p className={s.text}>
            <span className={s.span}>Contact storage: </span>
            Add new contacts, including first names, last names, phone numbers
          </p>
          <p className={s.text}>
            <span className={s.span}>Convenience: </span>
            Quick access to contacts at any time and from any place.
          </p>
        </div>
      </div>
    </>
  );
};
export default HomePage;
