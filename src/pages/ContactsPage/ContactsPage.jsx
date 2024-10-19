import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchContacts } from "../../redux/contacts/operations";
import { selectError, selectLoading } from "../../redux/contacts/selectors";

import Loader from "../../components/Loader/Loader";

import ContactEditor from "../../components/ContactEditor/ContactEditor";
import SearchBox from "../../components/SearchBox/SearchBox";
import ContactList from "../../components/ContactList/ContactList";

const ContactsPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);
  const isError = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <ContactEditor />
      <SearchBox />
      {isLoading && !isError && <Loader />}
      {isError}
      <ContactList />
    </>
  );
};

export default ContactsPage;
