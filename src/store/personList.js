import ActionTypes from "./actionType";

const initialState = {
  personList: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.ADD_PERSON:
      console.log("pass here in reducer");
      return {
        ...state,
        personList: [...state.personList, action.payload],
      };
    case ActionTypes.EDIT_PERSON:
      const newPersonList = state.personList.map((person) =>
        person.id === action.id ? action.payload : person
      );

      return {
        ...state,
        personList: newPersonList,
      };

      break;

    default:
      break;
  }
  return state;
};

export default reducer;
