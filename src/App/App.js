import React, { useState } from "react";
import "./App.css";
import MonthPicker from "../MonthPicker/MonthPicker";
import DayPicker from "../DayPicker/DayPicker";
import EventDialog from "../EventDialog/EventDialog";

function App() {
  const [month, setMonth] = useState(getCurrentDateAndMonth()[0]);
  const [year, setYear] = useState(getCurrentDateAndMonth()[1]);
  const [showDialog, setShowDialog] = useState(false);
  const [xPos, setXPos] = useState(0);
  const [yPos, setYPos] = useState(0);

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

  function handleShowDialog(event) {
    console.log(`xpos: ${event.clientX}`);
    console.log(`ypos: ${event.clientY}`);
    setXPos(event.clientX);
    setYPos(event.clientY);

    setShowDialog(true);
  }

  return (
    <div className="App">
      <EventDialog showDialog={showDialog} xPos={xPos} yPos={yPos} />
      <MonthPicker
        month={month}
        year={year}
        onMonthChange={handleMonthChange}
      />
      <DayPicker month={month} year={year} onClick={handleShowDialog} />
    </div>
  );
}

export default App;
