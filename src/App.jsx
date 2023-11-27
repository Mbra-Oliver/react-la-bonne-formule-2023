import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header";
import Products from "./components/Product";
import { PanierContextProvider } from "./store/panier-context";

function App() {
  return (
    <PanierContextProvider>
      <Header />
      <Products />
    </PanierContextProvider>
  );
}

export default App;
