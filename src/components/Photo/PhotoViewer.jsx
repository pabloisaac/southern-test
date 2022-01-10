import React, { useContext, useEffect } from "react";
import uuid from "react-uuid";
import { AppContext } from "../../store/reducer";
import {
  setRoverType, setCameraType, setEarthDate, setSolDate, setQuery,
} from "../../store/actions";
import "./index.css";
import LazyImage from "./LazyImage";
import Loading from "../Loading/Loading";
import PhotoEmpty from "./PhotoEmpty";

function PhotoViewer() {
  const { state, dispatch } = useContext(AppContext);

  useEffect(() => {
    let data = localStorage.getItem("bookmarks");
    if (data !== null) {
      data = JSON.parse(data);
      dispatch(setRoverType(data.rover_type));
      dispatch(setCameraType(data.camera_type));
      dispatch(setEarthDate(data.earth_date));
      dispatch(setSolDate(data.sol_date));
      dispatch(setQuery(data.query));
    }
  }, []);

  const listPhotos = () => state.photos.map((arr) => (
    <div className="grid-style" key={uuid()}>
      {arr.map((item) => (
        <LazyImage
          key={uuid()}
          src={item.img_src}
          alt={item.img_src}
        />
      ))}
    </div>
  ));

  return (
    <div className="box-color border-grid">
      {state.handle_search && <PhotoEmpty />}
      {!state.loading ? listPhotos() : <Loading />}
    </div>
  );
}

export default PhotoViewer;
