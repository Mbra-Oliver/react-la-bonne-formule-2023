import { useState } from "react";
import Counter from "./components/Counter";
import Header from "./components/Header";
import Auth from "./components/Auth";
import UserProfile from "./components/UserProfile";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const isAuthenticated = useSelector((state) => state.auth.isAUthenticated);

  return (
    <>
      <Header />
      {!isAuthenticated ? <Auth /> : <UserProfile />}

      <Counter />
    </>
  );
}

export default App;
