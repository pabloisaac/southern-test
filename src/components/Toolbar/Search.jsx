import React, { useContext } from "react";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import SearchIcon from "@mui/icons-material/Search";
import _ from "lodash";
import moment from "moment";
import GetRoverByQuery from "../../services/ApiNasa";
import {
  setListPhotos, setRoverType, setCameraType, setEarthDate, setSolDate, setLoading, setHandleSearch, setQuery,
} from "../../store/actions";
import { initialState, AppContext } from "../../store/reducer";

function Search() {
  const { state, dispatch } = useContext(AppContext);

  const getApiNasa = async () => {
    dispatch(setLoading(true));
    const response = await GetRoverByQuery(state.query);
    if (response.data.photos.length === 0) {
      dispatch(setHandleSearch(true));
    } else {
      dispatch(setHandleSearch(false));
    }
    const bookmarks = {
      rover_type: state.rover_type,
      camera_type: state.camera_type,
      earth_date: state.earth_date,
      sol_date: state.sol_date,
      query: state.query,
    };
    localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
    dispatch(setListPhotos(_.chunk(response.data.photos, 5)));
    dispatch(setLoading(false));
  };

  const deleteBookmarks = () => {
    localStorage.removeItem("bookmarks");
    dispatch(setRoverType(null));
    dispatch(setCameraType(null));
    dispatch(setEarthDate(moment().format("YYYY-MM-DD")));
    dispatch(setSolDate(0));
    dispatch(setListPhotos([]));
    dispatch(setQuery(initialState.query));
    dispatch(setHandleSearch(false));
  };

  return (
    <>
      <Button
        variant="contained"
        onClick={getApiNasa}
        endIcon={<SearchIcon />}
        disabled={state.rover_type === null}
      >
        Search
      </Button>
      {localStorage.getItem("bookmarks")
        && (
          <Button
            variant="contained"
            onClick={deleteBookmarks}
            startIcon={<DeleteIcon />}
          >
            Delete Bookmarks
          </Button>
        )}
    </>
  );
}

export default Search;
