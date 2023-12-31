import { Suspense, useEffect, useState } from "react";

import EventsList from "../components/EventsList";
import { Await, defer, json, useLoaderData } from "react-router-dom";

export default function EventsPage() {
  const { events } = useLoaderData();
  // const events = data.events;

  // // if (data.isError) {
  // //   return <p>{data.message}</p>;
  // // }

  // return <EventsList events={events} />;

  return (
    <Suspense fallback={<p style={{ textAlign: "center" }}>loading...</p>}>
      <Await resolve={events}>
        {(loadedEvents) => <EventsList events={loadedEvents} />}
      </Await>
    </Suspense>
  );
}

async function loadEvents() {
  const response = await fetch("http://localhost:8080/events");

  if (!response.ok) {
    // return { isError: true, message: "Could not fetch events" };
    // throw new Response(
    //   JSON.stringify({
    //     message: "Could not fetch events",
    //   }),
    //   {
    //     status: 500,
    //   }
    // );
    return json(
      { message: "Could not fetch events" },
      {
        status: 500,
      }
    );
  } else {
    const resData = await response.json();
    return resData.events;
    // return response;
  }
}

export function eventsLoader() {
  return defer({
    events: loadEvents(),
  });
}
