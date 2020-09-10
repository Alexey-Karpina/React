const contacts = (state = [], action) => {
  switch (action.type) {
    case "ADD_CONTACT":
      console.log("Add");
      return [
        ...state,
        {
          name: action.name,
          number: action.number,
          id: action.id,
        },
      ];
    case "DELETE_CONTACT":
      return state.filter((item) => {
        console.log("Delete");
        return item.id !== action.id;
      });
    default:
      return state;
  }
};

export default contacts;
