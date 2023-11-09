import React from "react";
import logo from "./../../assets/investment-calculator-logo.png";

import style from "./style.module.css";
export default function Header() {
  return (
    <header className={style.header}>
      <img src={logo} alt="logo" />
      <h1>Investment Calculator</h1>
    </header>
  );
}
