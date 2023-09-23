import { useState } from "react";
import "./App.css";
import AnimalPages from "./pages/AnimalPages";
import TopNavigation from "../components/TopNavigation";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <TopNavigation />
      <div className="appContent">
        <AnimalPages />
      </div>
    </>
  );
}

export default App;
