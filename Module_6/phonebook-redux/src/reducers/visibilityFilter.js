import { VisibilityFilters } from "../actions";

const visibilityFilter = (
  state = { filter: VisibilityFilters.SHOW_ALL, search: "" },
  action
) => {
  switch (action.type) {
    case "SET_VISIBILITY_ITEMS":
      return (state = { filter: action.filter, search: action.search });
    default:
      return state;
  }
};
export default visibilityFilter;
