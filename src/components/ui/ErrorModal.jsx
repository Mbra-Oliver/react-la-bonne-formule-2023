import React from "react";
import classes from "./Error.module.css";
import Card from "./Card";
import { Button } from "./Button";

export default function ErrorModal({ onClickHandler, title, message }) {
  return (
    <div onClick={onClickHandler}>
      <div className={classes.backdrop} />
      <Card className={classes.modal}>
        <header className={classes.header}>
          <h2>{title}</h2>
        </header>
        <div className={classes.content}>
          <p>{message}</p>
        </div>
        <footer className={classes.actions}>
          <Button onClickHandler={onClickHandler}>Close</Button>
        </footer>
      </Card>
    </div>
  );
}
