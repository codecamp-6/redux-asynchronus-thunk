import React, { useState } from "react";
import "./App.css";
import FormForSummit from "./component/FormForSummit";
import PersonList from "./component/PersonList";

import { connect } from "react-redux";

import "./css/formForSummit.css";
import "./css/personList.css";
import { actionCreators } from "./store/action/actionCreators";

function App(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const onClick = async (e) => {
    e.preventDefault();
    props.login(username, password);
  };
  return (
    <div className="App">
      {props.status === "user" ? null : (
        <>
          <form onSubmit={onClick}>
            <input
              type="text"
              placeholder="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="password"
              placeholder="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit"> login </button>
          </form>
        </>
      )}
      {props.status === "user" ? <FormForSummit /> : null}
      {props.status === "user" ? <PersonList /> : null}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    status: state.user.status,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    login: (username, password) =>
      dispatch(actionCreators.login(username, password)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
