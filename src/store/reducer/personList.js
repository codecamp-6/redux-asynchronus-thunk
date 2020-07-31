import ActionTypes from "../action/actionType";

const initialState = {
  personList: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.ADD_PERSON:
      return {
        ...state,
        personList: action.data,
      };

    case ActionTypes.GET_PEOPLE:
      return {
        ...state,
        personList: action.data,
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
