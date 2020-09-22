import {v4 as uuidv4} from 'uuid';

const contactsRequested = () => {
  return {
    type: "FETCH_CONTACTS_REQUEST",
  };
};

const contactsLoaded = (newContacts) => {
  return {
    type: "FETCH_CONTACTS_SUCCESS",
    payload: newContacts,
  };
};

const contactsError = (error) => {
  return {
    type: "FETCH_CONTACTS_FAILURE",
    payload: error,
  };
};

export const contactAddedToList = (name, number) => {
  return {
    type: "CONTACT_ADDED_TO_LIST",
    payload: {
      name,
      number,
      id: uuidv4(),
    },
  };
};

export const contactRemovedFromList = (contactId) => {
  return {
    type: "CONTACT_REMOVED_FROM_CART",
    payload: contactId,
  };
};

export const setVisibilityItems = (search) => ({
  type: "SET_VISIBILITY_ITEMS",
  payload: search,
});

const fetchContacts = (phonebookService, dispatch) => () => {
  dispatch(contactsRequested());
  phonebookService
    .getContacts()
    .then((data) => dispatch(contactsLoaded(data)))
    .catch((err) => dispatch(contactsError(err)));
};

export { fetchContacts };
