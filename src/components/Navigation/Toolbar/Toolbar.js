import React from "react";

import classes from "./Toolbar.css";
import Logo from "../../Logo/Logo";
import NavigationItems from "../../Navigation/NavigationItems/NavigationItems";
import ToggleButton from "../../Navigation/Toolbar/ToggleButton/ToggleButton";

const toolbar = (props) => (
  <header className={classes.Toolbar}>
    <ToggleButton toggle={props.toggle} />
    <div className={classes.Logo}>
      <Logo />
    </div>
    <nav className={classes.DesktopOnly}>
      <NavigationItems />
    </nav>
  </header>
);

export default toolbar;
