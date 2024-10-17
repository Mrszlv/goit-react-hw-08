import { createSelector } from "@reduxjs/toolkit";
import { selectNameFilter } from "../filters/selectors";

export const selectLoading = (state) => state.contacts.loading;
export const selectAllContacts = (state) => state.contacts.items;
export const selectContacts = (state) => state.contact;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectNameFilter],
  (contacts, filter) => {
    return contacts.filter((contact) =>
      contact.name.toLowerCase().trim().includes(filter.toLowerCase().trim())
    );
  }
);
