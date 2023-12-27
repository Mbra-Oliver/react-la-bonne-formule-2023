import React from "react";
import { useParams } from "react-router-dom";
export default function EventDetails() {
  const params = useParams();
  return <div>EventDetails {params.id}</div>;
}
