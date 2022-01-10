import React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import "./index.css";

function Loading() {
  return (
    <div className="spinner-center">
      <Box>
        <CircularProgress />
      </Box>
    </div>
  );
}

export default Loading;
