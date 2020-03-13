import React from "react";
import "./App.css";
import MonthPicker from "../MonthPicker/MonthPicker";
import DayPicker from "../DayPicker/DayPicker";

function App() {
  return (
    <div className="App">
      <MonthPicker />
      <DayPicker />
    </div>
  );
}

export default App;
