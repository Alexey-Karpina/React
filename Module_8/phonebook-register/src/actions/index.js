import { v4 as uuidv4 } from "uuid";
import axios from "axios";

const contactsRequested = () => {
  return {
    type: "FETCH_CONTACTS_REQUEST",
  };
};

const contactsPosted = () => {
  return {
    type: "POST_CONTACTS_REQUEST",
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

const postContacts = (phonebookService, dispatch, state) => () => {
  dispatch(contactsPosted());
  phonebookService.setContacts(state.contacts);
};

export const loginUser = (userObj) => ({
  type: "LOGIN_USER",
  payload: userObj,
});

export const logoutUser = () => ({
  type: 'LOGOUT_USER'
})

export const userPostFetch = (user) => {
  return (dispatch) => {
    return axios
      .post(
        "https://goit-phonebook-api.herokuapp.com/users/signup",
        JSON.stringify({ user })
      )
      .then((resp) => resp.json())
      .then((data) => {
        if (data.message) {
          console.log(data.message);
        } else {
          localStorage.setItem("token", data.jwt);
          dispatch(loginUser(data.user));
        }
      });
  };
};

export const userLoginFetch = (user) => {
  return (dispatch) => {
    return axios
      .post(
        "https://goit-phonebook-api.herokuapp.com/users/login",
        JSON.stringify({ user })
      )
      .then((resp) => resp.json())
      .then((data) => {
        if (data.message) {
          console.log(data.message);
        } else {
          localStorage.setItem("token", data.jwt);
          dispatch(loginUser(data.user));
        }
      });
  };
};

export const getProfileFetch = () => {
  return (dispatch) => {
    const token = localStorage.token;
    if (token) {
      return axios
        .get("https://goit-phonebook-api.herokuapp.com/users/current")
        .then((resp) => resp.json())
        .then((data) => {
          if (data.message) {
            console.log(data.message);
            localStorage.removeItem("token");
          } else {
            dispatch(loginUser(data.user));
          }
        });
    }
  };
};

export { fetchContacts, postContacts };
