import React, { useState } from "react";
import { connect } from "react-redux";
import ActionTypes from "../store/actionType";

function FormForSummit(props) {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const onSummit = (e) => {
    e.preventDefault();
    props.onSummit({ name, age, id: Date.now() });
    setName("");
    setAge("");
  };
  return (
    <div>
      <h1>Form for add person</h1>
      <form className="form-summit" onSubmit={onSummit}>
        <div className="item">
          {" "}
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder=" name..."
          />
        </div>
        <div className="item">
          {" "}
          <input
            type="text"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            placeholder=" age...."
          />
        </div>

        <button className="button">summit</button>
      </form>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSummit: (payload) => dispatch({ type: ActionTypes.ADD_PERSON, payload }),
  };
};

export default connect(null, mapDispatchToProps)(FormForSummit);
