import { createContext } from "react";
import { actionTypes } from "./actions";

export const AppContext = createContext({});

export const initialState = {
  photos: [],
  rover_type: null,
  camera_type: null,
  earth_date: null,
  sol_date: 0,
  query: {
    rover: null,
    sol: 0,
    camera: null,
    earth_date: null,
  },
  loading: false,
  handle_search: false,
};

export const reducer = (state = {}, action = {}) => {
  let response;
  switch (action.type) {
    case actionTypes.SET_LIST_PHOTOS:
      response = { ...state, photos: action.data };
      return response;

    case actionTypes.SET_ROVER_TYPE:
      response = { ...state, rover_type: action.data };
      return response;

    case actionTypes.SET_CAMERA_TYPE:
      response = { ...state, camera_type: action.data };
      return response;

    case actionTypes.SET_EARTH_DATE:
      response = { ...state, earth_date: action.data };
      return response;

    case actionTypes.SET_SOL_DATE:
      response = { ...state, sol_date: action.data };
      return response;

    case actionTypes.SET_QUERY:
      response = { ...state, query: action.data };
      return response;

    case actionTypes.SET_LOADING:
      response = { ...state, loading: action.data };
      return response;

    case actionTypes.SET_HANDLE_SEARCH:
      response = { ...state, handle_search: action.data };
      return response;

    default:
      return response;
  }
};
