import React from "react";
import { useParams } from "react-router-dom";

export default function ProductDetails() {
  const params = useParams();
  const id = params.id;

  return (
    <h1>
      Product Details - <b>{id}</b>
    </h1>
  );
}
