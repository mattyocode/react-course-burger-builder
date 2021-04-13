import React from "react";

import classes from "./ToggleButton.css";

const toggleButton = (props) => (
  <div className={classes.Container} onClick={props.toggle}>
    <div className={classes.Bar1}></div>
    <div className={classes.Bar2}></div>
    <div className={classes.Bar3}></div>
  </div>
);

export default toggleButton;
