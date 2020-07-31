import React, { useEffect } from "react";
import { connect } from "react-redux";
import Person from "./personList/Person";
import { actionCreators } from "../store/action/actionCreators";

function PersonList(props) {
  useEffect(() => {
    props.getPeople();
  }, []);
  return (
    <div className="person-list">
      {props.personList.map((person) => (
        <Person
          name={person.name}
          age={person.age}
          key={person.id}
          id={person.id}
        />
      ))}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    statusUser: state.user.status,
    personList: state.personList.personList,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getPeople: () => dispatch(actionCreators.getPeople()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PersonList);
