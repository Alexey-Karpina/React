const addContact = (name, number, id) => ({
  type: "ADD_CONTACT",
  name,
  number,
  id,
});

const setVisibilityItems = (search, filter) => ({
  type: "SET_VISIBILITY_ITEMS",
  search,
  filter,
});

const onDelete = (id) => ({
  type: "DELETE_CONTACT",
  id,
});

const VisibilityFilters = {
  SHOW_ALL: "SHOW_ALL",
  SHOW_SELECTED: "SHOW_SELECTED",
};

export { addContact, setVisibilityItems, onDelete, VisibilityFilters };
