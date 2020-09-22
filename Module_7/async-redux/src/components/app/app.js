import React from 'react';
import {Provider} from 'react-redux';
import ErrorBoundry from '../errorBoundry/errorBoundry';
import PhonebookService from '../../services/phonebook-service';
import { PhonebookServiceProvider } from '../phonebookServiceContext/phonebookServiceContext';
import ContactList from '../contactList/contactList';
import AddContact from '../../containers/AddContact';
import Searcher from '../../containers/Searcher';

import {createStore} from 'redux'
import reducer from '../../reducers';
const store = createStore(reducer);

const phonebookService = new PhonebookService();

const App = () => {
    return (
        <Provider store={store}>
            <ErrorBoundry>
                <PhonebookServiceProvider value={phonebookService}>
                    <AddContact />
                    <Searcher />
                    <ContactList />
                </PhonebookServiceProvider>
            </ErrorBoundry>
        </Provider>
    )
}

export default App;