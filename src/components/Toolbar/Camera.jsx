import React, { useContext, useState, useEffect } from "react";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import uuid from "react-uuid";
import { AppContext } from "../../store/reducer";
import { setQuery, setCameraType } from "../../store/actions";
import OptionsByRover from "../../utils/menuOptions";

function Camera() {
  const [options, setOptions] = useState([]);
  const { state, dispatch } = useContext(AppContext);

  useEffect(() => {
    setOptions(OptionsByRover(state.rover_type));
  }, [state.rover_type]);

  const handleChange = (val) => {
    dispatch(setCameraType(val));
    dispatch(setQuery({ ...state.query, camera: val }));
  };

  const buildOptions = () => options.map((item) => (
    <Chip
      label={item.name}
      variant={state.camera_type === item.abbreviation ? "filled" : "outlined"}
      value={item.abbreviation}
      onClick={() => handleChange(item.abbreviation)}
      key={uuid()}
    />
  ));

  return (
    <div className="div-center">
      <Stack direction="row" spacing={1}>
        {buildOptions()}
      </Stack>
    </div>
  );
}

export default Camera;
