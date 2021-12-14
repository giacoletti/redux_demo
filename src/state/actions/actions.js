import axios from 'axios';

export const thunkExperiment = () => {
  // we will query the ReqRes API 
  // Dispatch an action and set the users in state
  return async (dispatch) => {
    const response = await axios.get("https://reqres.in/api/users");
    dispatch({
      type: "SET_USERS",
      payload: response.data.data
    });
  };
};
