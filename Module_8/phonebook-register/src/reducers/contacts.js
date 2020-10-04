const initialState = {
  contacts: [],
  search: '',
  loading: true,
  error: null,
};

const addToList = (state, newItem) => {
  const { contacts } = state;
  return [
    ...contacts,
    {
      name: newItem.name,
      number: newItem.number,
      id: newItem.id,
    },
  ];
};

const deleteContact = (state, id) => {
  const { contacts } = state;
  return contacts.filter((item) => {
    return item.id !== id;
  });
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_CONTACTS_REQUEST":
      return {
        ...state,
        contacts: [],
        search: '',
        loading: true,
        error: null,
      };

    case "FETCH_CONTACTS_SUCCESS":
      return {
        ...state,
        contacts: action.payload,
        search: '',
        loading: false,
        error: null,
      };

    case "FETCH_CONTACTS_FAILURE":
      return {
        ...state,
        contacts: [],
        search: '',
        loading: false,
        error: action.payload,
      };

    case "CONTACT_ADDED_TO_LIST":
      const newItem = action.payload;
      console.log(state);
      return {
        ...state,
        contacts: addToList(state, newItem),
        search: '',
        loading: false,
        error: null,
      };

    case "CONTACT_REMOVED_FROM_CART":
      const id = action.payload;
      return {
        ...state,
        contacts: deleteContact(state, id),
        search: '',
        loading: false,
        error: null,
      };

    case "SET_VISIBILITY_ITEMS":
        const cont = state.contacts;
      return {
        ...state,
        contacts: cont,
        search: action.payload,
        loading: false,
        error: null,
      };
    default:
      return state;
  }
};

export default reducer;
