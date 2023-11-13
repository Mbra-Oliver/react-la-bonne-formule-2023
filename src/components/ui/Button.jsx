import React from "react";
import classes from "./Button.module.css";
export const Button = ({ children, onClickHandler, type }) => {
  return (
    <button
      className={classes.button}
      type={type || "button"}
      onClick={onClickHandler}
    >
      {children}
    </button>
  );
};
