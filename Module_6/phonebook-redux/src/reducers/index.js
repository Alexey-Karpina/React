import { combineReducers } from "redux";
import contacts from "./contacts";
import visibilityFilter from "./visibilityFilter";

export default combineReducers({
  contacts,
  visibilityFilter,
});
