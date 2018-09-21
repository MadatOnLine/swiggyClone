import api from "../api";
import {
  LOGIN_FAILED,
  LOGIN_REQUEST,
  LOGIN_SUCCESSFUL,
  REGISTER_REQUEST,
  REGISTER_SUCCESSFUL,
  REGISTER_FAILED,
  GET_DASH_BOARD_FAILED,
  GET_DASH_BOARD_REQUEST,
  GET_DASH_BOARD_SUCCESSFUL,
  ADD_ITEM_TO_CART,
  REMOVE_ITEM_FROM_CART,
  GET_PAST_ORDERS_REQUEST,
  GET_PAST_ORDERS_SUCCESSFUL,
  GET_PAST_ORDERS_FAILED,
  GET_ADDRESSES_FAILED,
  GET_ADDRESSES_REQUEST,
  GET_ADDRESSES_SUCCESSFUL,
  GET_CATEGORY_ITEMS_REQUEST,
  GET_CATEGORY_ITEMS_SUCCESSFUL,
  GET_CATEGORY_ITEMS_FAILED,
  SELECT_ADDRESS_FOR_DELIVERY,
  GET_ALL_CATEGORIES_REQUEST,
  GET_ALL_CATEGORIES_SUCCESSFUL,
  GET_ALL_CATEGORIES_FAILED
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

export const register = params => {
  return dispatch => {
    return new Promise((resolve, reject) => {
      dispatch({ type: REGISTER_REQUEST });
      return api
        .register(params)
        .then(response => {
          if (response && response.data) {
            dispatch({
              type: REGISTER_SUCCESSFUL,
              payload: response.data
            });
            resolve(response.data);
          }
        })
        .catch(e => {
          dispatch({
            type: REGISTER_FAILED,
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

export const getPastOrders = accessToken => {
  return dispatch => {
    return new Promise((resolve, reject) => {
      dispatch({ type: GET_PAST_ORDERS_REQUEST });
      return api
        .getPastOrders(accessToken)
        .then(response => {
          if (response && response.data && response.data.orders) {
            dispatch({
              type: GET_PAST_ORDERS_SUCCESSFUL,
              payload: response.data.orders
            });
            resolve(response.data.orders);
          }
        })
        .catch(e => {
          dispatch({
            type: GET_PAST_ORDERS_FAILED,
            payload: e
          });
          reject(e);
        });
    });
  };
};

export const getMyAddresses = accessToken => {
  return dispatch => {
    return new Promise((resolve, reject) => {
      dispatch({ type: GET_ADDRESSES_REQUEST });
      return api
        .getAddresses(accessToken)
        .then(response => {
          if (response && response.data) {
            dispatch({
              type: GET_ADDRESSES_SUCCESSFUL,
              payload: response.data
            });
            resolve(response.data);
          }
        })
        .catch(e => {
          dispatch({
            type: GET_ADDRESSES_FAILED,
            payload: e
          });
          reject(e);
        });
    });
  };
};

export const getCategoryItemsById = (id, accessToken) => {
  return dispatch => {
    return new Promise((resolve, reject) => {
      dispatch({ type: GET_CATEGORY_ITEMS_REQUEST });
      return api
        .getCategoryItems(id, accessToken)
        .then(response => {
          if (response && response.data) {
            dispatch({
              type: GET_CATEGORY_ITEMS_SUCCESSFUL,
              payload: response.data
            });
            resolve(response.data);
          }
        })
        .catch(e => {
          dispatch({
            type: GET_CATEGORY_ITEMS_FAILED,
            payload: e
          });
          reject(e);
        });
    });
  };
};

export const getAllCategories = accessToken => {
  return dispatch => {
    return new Promise((resolve, reject) => {
      dispatch({ type: GET_ALL_CATEGORIES_REQUEST });
      return api
        .getAllCategories(accessToken)
        .then(response => {
          if (response && response.data && response.data.categories) {
            dispatch({
              type: GET_ALL_CATEGORIES_SUCCESSFUL,
              payload: response.data.categories
            });
            resolve(response.data);
          }
        })
        .catch(e => {
          dispatch({
            type: GET_ALL_CATEGORIES_FAILED,
            payload: e
          });
          reject(e);
        });
    });
  };
};

export const selectAddressForDelivery = address => {
  return dispatch => {
    dispatch({
      type: SELECT_ADDRESS_FOR_DELIVERY,
      payload: address
    });
  };
};
