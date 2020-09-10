import { connect } from "react-redux";
import { onDelete } from "../../actions";
import ContactsList from "../../components/ContactList";
import { VisibilityFilters } from "../../actions";

const getVisibleContacts = (contacts, visibility) => {
  const { search, filter } = visibility;
  switch (filter) {
    case VisibilityFilters.SHOW_ALL:
      console.log("All");
      return contacts;
    case VisibilityFilters.SHOW_SELECTED:
      console.log("SLCTD");
      return contacts.filter((item) => {
        return item.name.toLowerCase().indexOf(search.toLowerCase()) > -1;
      });
    default:
      console.log("Default");
      break;
  }
};

const mapStateToProps = (state) => ({
  items: getVisibleContacts(state.contacts, state.visibilityFilter),
});

const mapDispatchToProps = (dispatch) => ({
  onDelete: (id) => dispatch(onDelete(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactsList);
