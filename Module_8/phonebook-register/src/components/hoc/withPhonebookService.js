import React from "react";
import { PhonebookServiceConsumer } from "../phonebookServiceContext/phonebookServiceContext";

const withPhonebookService = () => (Wrapepd) => {
  return (props) => {
    return (
      <PhonebookServiceConsumer>
        {(phonebookService) => {
          return <Wrapepd {...props} phonebookService={phonebookService} />;
        }}
      </PhonebookServiceConsumer>
    );
  };
};

export default withPhonebookService;
