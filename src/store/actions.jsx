export const actionTypes = {
  SET_LIST_PHOTOS: "SET_LIST_PHOTOS",
  SET_ROVER_TYPE: "SET_ROVER_TYPE",
  SET_CAMERA_TYPE: "SET_CAMERA_TYPE",
  SET_EARTH_DATE: "SET_EARTH_DATE",
  SET_SOL_DATE: "SET_SOL_DATE",
  SET_QUERY: "SET_QUERY",
  SET_LOADING: "SET_LOADING",
  SET_HANDLE_SEARCH: "SET_HANDLE_SEARCH",
};
export const setListPhotos = (data) => ({
  type: actionTypes.SET_LIST_PHOTOS,
  data,
});

export const setRoverType = (data) => ({
  type: actionTypes.SET_ROVER_TYPE,
  data,
});

export const setCameraType = (data) => ({
  type: actionTypes.SET_CAMERA_TYPE,
  data,
});

export const setEarthDate = (data) => ({
  type: actionTypes.SET_EARTH_DATE,
  data,
});

export const setSolDate = (data) => ({
  type: actionTypes.SET_SOL_DATE,
  data,
});

export const setQuery = (data) => ({
  type: actionTypes.SET_QUERY,
  data,
});

export const setLoading = (data) => ({
  type: actionTypes.SET_LOADING,
  data,
});

export const setHandleSearch = (data) => ({
  type: actionTypes.SET_HANDLE_SEARCH,
  data,
});
