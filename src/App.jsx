import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header";
import Product from "./components/Products";
import { ManagementCartContextProvider } from "./store/management-cart-context";

function App() {
  return (
    <ManagementCartContextProvider>
      <Header />
      <Product />
    </ManagementCartContextProvider>
  );
}

export default App;
