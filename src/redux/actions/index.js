import api from "../api";
export const login = () => {
  return async dispatch => {
    const {
      response,
      error
    } = api.login();
    if (response) {
      dispatch({
        type: "LOGIN_SUCCESSFULL",
        payload: response
      });
    }

    if (error) {
      dispatch({
        type: "LOGIN_FAILED",
        payload: error
      });
    }
  };
};
