import { useState } from "react";
import Header from "./components/Header";
import ResultTable from "./components/ResultTable";
import UserInput from "./components/UserInput";

function App() {
  const [userInput, setUserInput] = useState(null);
  const yearlyData = [];
  const calculateHandler = (userInput) => {
    setUserInput(userInput);
  };

  if (userInput) {
    yearlyData == [];
    let currentSavings = +userInput["current-savings"];
    const yearlyContribution = +userInput["yearly-contribution"];
    const expectedReturn = +userInput["expected-return"] / 100;
    const duration = +userInput["duration"];

    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        // feel free to change the shape of the data pushed to the array!
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
      });
    }
  }

  return (
    <div>
      <Header />
      <UserInput calculateHandler={calculateHandler} />
      {!userInput && (
        <p
          style={{
            textAlign: "center",
          }}
        >
          No data to display !
        </p>
      )}
      {userInput && (
        <ResultTable
          initialInvest={userInput["current-savings"]}
          data={yearlyData}
        />
      )}
    </div>
  );
}

export default App;
