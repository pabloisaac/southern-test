import React, { useContext } from "react";
import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";
import moment from "moment";
import { setQuery, setEarthDate } from "../../store/actions";
import { AppContext } from "../../store/reducer";

function EarthDate() {
  const { state, dispatch } = useContext(AppContext);

  const searchByEarthDate = (value) => {
    const date = moment(value).format("YYYY-MM-DD");
    dispatch(setEarthDate(date));
    dispatch(setQuery({ ...state.query, earth_date: date }));
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DatePicker
        label="Earth Date"
        value={state.earth_date || moment().format("YYYY-MM-DD")}
        onChange={(newValue) => {
          searchByEarthDate(newValue);
        }}
        renderInput={(params) => <TextField {...params} />}
      />
    </LocalizationProvider>
  );
}

export default EarthDate;
