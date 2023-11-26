import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header";
import Product from "./components/Products";

function App() {
  return (
    <>
      <Header />
      <Product />
    </>
  );
}

export default App;
