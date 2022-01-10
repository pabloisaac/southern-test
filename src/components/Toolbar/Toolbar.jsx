import React, { useContext } from "react";
import { AppContext } from "../../store/reducer";
import Rover from "./Rover";
import Camera from "./Camera";
import EarthDate from "./EarthDate";
import SolDate from "./SolDate";
import Search from "./Search";
import "./index.css";

function Toolbar() {
  const { state } = useContext(AppContext);

  return (
    <div className="tool-color">
      <div className="box-container">
        <Rover />
        {state.rover_type && <Camera />}
        <div className={localStorage.getItem("bookmarks") ? "grid-btn grid-4" : "grid-btn grid-3"}>
          <EarthDate />
          <SolDate />
          <Search />
        </div>
      </div>
    </div>
  );
}

export default Toolbar;
