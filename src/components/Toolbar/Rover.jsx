import React, { useContext } from "react";
import Button from "@mui/material/Button";
import { AppContext } from "../../store/reducer";
import { setRoverType, setQuery } from "../../store/actions";
import * as Constants from "../../utils/constants";

function Rover() {
  const { state, dispatch } = useContext(AppContext);

  const handleChange = (e) => {
    const { value } = e.target;
    dispatch(setRoverType(value));
    dispatch(setQuery({ ...state.query, rover: value }));
  };

  return (
    <div className="grid-btn grid-3">
      <Button variant={state.rover_type === Constants.CURIOSITY ? "contained" : "outlined"} value={Constants.CURIOSITY} onClick={handleChange}>Curiosity</Button>
      <Button variant={state.rover_type === Constants.OPPORTUNITY ? "contained" : "outlined"} value={Constants.OPPORTUNITY} onClick={handleChange}>Opportunity</Button>
      <Button variant={state.rover_type === Constants.SPIRIT ? "contained" : "outlined"} value={Constants.SPIRIT} onClick={handleChange}>Spirit</Button>
    </div>
  );
}

export default Rover;
