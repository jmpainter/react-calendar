import React, { useState } from "react";
import "./App.css";
import MonthPicker from "../MonthPicker/MonthPicker";
import DayPicker from "../DayPicker/DayPicker";

function App() {
  const [month, setMonth] = useState(getCurrentDateAndMonth()[0]);
  const [year, setYear] = useState(getCurrentDateAndMonth()[1]);

  function getCurrentDateAndMonth() {
    const d = new Date();
    return [d.getMonth(), d.getFullYear()];
  }

  function handleMonthChange(forward) {
    if (forward) {
      setMonth(previousMonth => {
        if (previousMonth === 11) {
          setYear(previousYear => previousYear + 1);
          return 0;
        }
        return previousMonth + 1;
      });
    } else {
      setMonth(previousMonth => {
        if (previousMonth === 0) {
          setYear(previousYear => previousYear - 1);
          return 11;
        }
        return previousMonth - 1;
      });
    }
  }
  return (
    <div className="App">
      <MonthPicker
        month={month}
        year={year}
        onMonthChange={handleMonthChange}
      />
      <DayPicker month={month} year={year} />
    </div>
  );
}

export default App;
