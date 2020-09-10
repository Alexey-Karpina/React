import React from "react";

import Header from "../Header";
import AddContacts from "../../containers/AddContacts";
import VisibleContacts from "../../containers/VisibleContacts";
import Searcher from "../../containers/Searcher";

const App = () => (
  <>
    <Header />
    <AddContacts />
    <Searcher />
    <VisibleContacts />
  </>
);
export default App;
