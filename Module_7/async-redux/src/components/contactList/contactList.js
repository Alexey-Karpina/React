import React, { Component } from "react";
import ContactListItem from "../contactListItem/contactListItem";
import { connect } from "react-redux";

import  withPhonebookService  from "../hoc/withPhonebookService";
import { fetchContacts, contactRemovedFromList } from "../../actions";
import  compose from "../../utils/compose";

import { getVisibleContacts, isContactsLoading, hasError } from '../../contacts-selectors';

import Spinner from "../spinner";
import ErrorIndicator from "../errorIndicator/errorIndicator";

const ContactList = ({ contacts, onDelete }) => {
  return (
    <ul className="contactList">
      {contacts.map((contact) => {
        return (
          <li key={contact.id}>
            <ContactListItem
              contact={contact}
              onDelete={() => onDelete(contact.id)}
            />
          </li>
        );
      })}
    </ul>
  );
};

class ContactListContainer extends Component {
  componentDidMount() {
    this.props.fetchContacts();
  }

  render() {
    const { contacts, loading, error, onDelete } = this.props;

    if (loading) {
      return <Spinner />;
    }

    if (error) {
      return <ErrorIndicator />;
    }

    return <ContactList contacts={contacts} onDelete={onDelete} />;
  }
}

const mapStateToProps = (state) => ({
  contacts: getVisibleContacts(state),
  loading: isContactsLoading(state),
  error: hasError(state),
});

const mapDispatchToProps = (dispatch, { phonebookService }) => {
  return {
    fetchContacts: fetchContacts(phonebookService, dispatch),
    onDelete: (id) => dispatch(contactRemovedFromList(id)),
  };
};

export default compose(
  withPhonebookService(),
  connect(mapStateToProps, mapDispatchToProps)
)(ContactListContainer);
