import React from "react";
import { useState } from "react";
import { connect } from "react-redux";
import ActionTypes from "../../store/action/actionType";

function Person(props) {
  const [index, setIndex] = useState(0);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    props.onEdit({ name, age, id: props.id }, props.id);

    setIndex(0);
  };
  /*jsx */
  const content = (
    <>
      <div>{props.name}</div>
      <div>{props.age}</div>
    </>
  );

  const edit = <div onClick={() => setIndex(2)}>edit</div>;

  const input = (
    <>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />{" "}
        <input
          type="text"
          placeholder="age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <button>edit</button>
      </form>
    </>
  );

  /*<-------------->*/

  const tabComponent = [content, edit, input];
  return (
    <div
      className="person"
      onMouseEnter={() => setIndex(1)}
      onMouseLeave={() => setIndex(0)}
    >
      {tabComponent[index]}
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    onEdit: (payload, id) =>
      dispatch({ type: ActionTypes.EDIT_PERSON, payload, id }),
  };
};

export default connect(null, mapDispatchToProps)(Person);
