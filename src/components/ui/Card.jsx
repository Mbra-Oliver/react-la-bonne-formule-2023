import React from "react";

import classe from "./Card.module.css";

export default function Card({ children, className }) {
  return <div className={`${classe.card} ${className}`}>{children}</div>;
}
