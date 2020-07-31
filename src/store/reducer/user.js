import ActionTypes from "../action/actionType";

const initialState = {
  token: null,
  userInFo: {},
  status: "guest",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.LOGIN:
      return {
        ...state,
        status: "user",
        token: action.token,
      };

    default:
      return state;
  }
};

export default reducer;
