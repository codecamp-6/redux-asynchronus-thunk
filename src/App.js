import React from "react";
import "./App.css";
import FormForSummit from "./component/FormForSummit";
import PersonList from "./component/PersonList";

import "./css/formForSummit.css";
import "./css/personList.css";

function App() {
  return (
    <div className="App">
      <FormForSummit />
      <PersonList />
    </div>
  );
}

export default App;
