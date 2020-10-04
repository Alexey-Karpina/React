import React from 'react';

const {
    Provider: PhonebookServiceProvider,
    Consumer: PhonebookServiceConsumer,
} = React.createContext();

export {
    PhonebookServiceConsumer,
    PhonebookServiceProvider,
};