//personList

const { default: axios } = require("../../config/axios");
const { default: ActionTypes } = require("./actionType");

export const addPerson = (name, age) => {
  return async (dispatch) => {
    const body = { name, age };

    await axios.post("/person", body);
    const result = await axios.get("/person/get-all");

    dispatch({ type: ActionTypes.ADD_PERSON, data: result?.data });
  };
};

export const getPeople = () => {
  return async (dispatch) => {
    const result = await axios.get("/person/get-all");
    dispatch({ type: ActionTypes.GET_PEOPLE, data: result?.data });
  };
};
