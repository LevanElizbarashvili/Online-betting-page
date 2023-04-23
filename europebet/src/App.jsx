import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CashGames from "./components/Cashgames";
import NewyearSeries from "./components/NewYearSeries";
import FinalStage from "./components/FinalStage";
import { useState } from "react";

function App() {
  const [componentName, setComponentName] = useState("A");
  const [selectedButton, setSelectedButton] = useState("1");

  const components = {
    A: <CashGames />,
    B: <NewyearSeries />,
    C: <FinalStage />,
  };

  const handleClick = (name, value) => {
    setComponentName(name);
    setSelectedButton(value);
  };

  return (
    <div className="App">
      <Header />
      <nav>
        <button
          onClick={() => handleClick("A", "1")}
          className={selectedButton === "1" ? "selected" : "rounded-left"}
        >
          <p>27 ოქტ - 7 ნოემ.</p>
          <h4>Cash Games</h4>
        </button>
        <button
          onClick={() => handleClick("B", "2")}
          className={selectedButton === "2" ? "selected" : ""}
        >
          <p>10 დეკ. - 29 დეკ.</p>
          <h4>New Year Series</h4>
        </button>
        <button
          onClick={() => handleClick("C", "3")}
          className={selectedButton === "3" ? "selected" : "rounded-right"}
        >
          <p>28 ოქტ - 7 ნოემ.</p>
          <h4>Final Stage</h4>
        </button>
      </nav>
      <div>{components[componentName]}</div>
      <Footer />
    </div>
  );
}

export default App;
