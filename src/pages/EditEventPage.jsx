import React from "react";
import EventForm from "../components/EventForm";
import { useLoaderData, useRouteLoaderData } from "react-router-dom";

export default function EditEventPage() {
  const data = useRouteLoaderData("event-details");
  const event = data.event;
  return <EventForm event={event} method="patch" />;
}
