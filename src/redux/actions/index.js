import api from "../api";
import {
  LOGIN_FAILED,
  LOGIN_REQUEST,
  LOGIN_SUCCESSFUL,
  GET_DASH_BOARD_FAILED,
  GET_DASH_BOARD_REQUEST,
  GET_DASH_BOARD_SUCCESSFUL,
  ADD_ITEM_TO_CART,
  REMOVE_ITEM_FROM_CART
} from "../constants";
export const login = params => {
  return dispatch => {
    return new Promise((resolve, reject) => {
      dispatch({ type: LOGIN_REQUEST });
      return api
        .login(params)
        .then(response => {
          if (response && response.data) {
            dispatch({
              type: LOGIN_SUCCESSFUL,
              payload: response.data
            });
            resolve(response.data);
          }
        })
        .catch(e => {
          dispatch({
            type: LOGIN_FAILED,
            payload: e
          });
          reject(e);
        });
    });
  };
};

export const getDashboardData = () => {
  return dispatch => {
    return new Promise((resolve, reject) => {
      dispatch({ type: GET_DASH_BOARD_REQUEST });
      return api
        .getDashboard()
        .then(response => {
          if (response && response.data) {
            dispatch({
              type: GET_DASH_BOARD_SUCCESSFUL,
              payload: response.data
            });
            resolve(response.data);
          }
        })
        .catch(e => {
          dispatch({
            type: GET_DASH_BOARD_FAILED,
            payload: e
          });
          reject(e);
        });
    });
  };
};

export const addToCart = item => {
  return {
    type: ADD_ITEM_TO_CART,
    payload: item
  };
};

export const removeItemFromCart = item => {
  return {
    type: REMOVE_ITEM_FROM_CART,
    payload: item
  };
};
