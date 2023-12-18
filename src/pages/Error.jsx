import React from "react";
import MainNavigation from "../components/MainNavigation";

export default function ErrorPage() {
  return (
    <div>
      <MainNavigation />
      <main>
        <h1>An error occured! </h1>
        <p>Could not find the page!</p>
      </main>
    </div>
  );
}
