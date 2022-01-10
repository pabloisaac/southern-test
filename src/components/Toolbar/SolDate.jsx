import React, { useContext } from "react";
import TextField from "@mui/material/TextField";
import { AppContext } from "../../store/reducer";
import { setQuery, setSolDate } from "../../store/actions";

function SolDate() {
  const { state, dispatch } = useContext(AppContext);

  const handleChange = (e) => {
    const { value } = e.target;
    dispatch(setSolDate(value));
    dispatch(setQuery({ ...state.query, sol: value }));
  };

  return (
    <TextField
      id="outlined-number"
      label="Sol Date"
      type="number"
      InputLabelProps={{
        shrink: true,
      }}
      value={state.sol_date}
      onChange={handleChange}
    />
  );
}

export default SolDate;
