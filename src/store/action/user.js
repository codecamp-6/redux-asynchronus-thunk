const { default: axios } = require("../../config/axios");
const { default: ActionTypes } = require("./actionType");

//user
export const login = (username, password) => {
  return async (dispatch) => {
    const token = await axios.post("/user/login", { username, password });

    dispatch({ type: ActionTypes.LOGIN, token });
  };
};
