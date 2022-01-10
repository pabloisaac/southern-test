import React from "react";
import logo from "../../images/favicon-192.png";
import "./index.css";

function Logo() {
  return (
    <div className="box-center logo-bc">
      <img alt="logo" src={logo} width="130px" height="130px" />
    </div>
  );
}

export default Logo;
