import { createSelector } from "reselect";

export const getSearchInput = (state) => state.search;
export const getContacts = (state) => state.contacts;
export const isContactsLoading = (state) => state.loading;
export const hasError = (state) => state.error;

export const getVisibleContacts = createSelector(
  [getSearchInput, getContacts],
  (search, contacts) => {
    if (search) {
      return contacts.filter((item) => {
        return item.name.toLowerCase().indexOf(search.toLowerCase()) > -1;
      });
    }
    return contacts;
  }
);
