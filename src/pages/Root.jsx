import React from "react";
import MainNavigation from "../components/MainNavigation";
import { Outlet, useNavigation } from "react-router-dom";

export default function RootLayout() {
  const navigation = useNavigation();

  return (
    <>
      {navigation.state === "loading" && <p>Loading....</p>}
      <MainNavigation />
      <main>
        <Outlet />
      </main>
    </>
  );
}
