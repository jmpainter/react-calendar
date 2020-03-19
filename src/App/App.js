import React, { useState } from "react";
import MonthPicker from "../MonthPicker/MonthPicker";
import DayPicker from "../DayPicker/DayPicker";
import EventDialog from "../EventDialog/EventDialog";
import EventDisplay from "../EventDisplay/EventDisplay";

function App() {
  const [month, setMonth] = useState(getCurrentDateAndMonth()[0]);
  const [year, setYear] = useState(getCurrentDateAndMonth()[1]);
  const [day, setDay] = useState(null);
  const [events, setEvents] = useState([]);
  const [showDialog, setShowDialog] = useState(false);
  const [xPos, setXPos] = useState(200);
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

  function handleShowDialog(day, event) {
    setDay(day);
    let xPos = event.clientX;
    // correction to keep dialog from going off screen to the right
    if (xPos > window.innerWidth - 130) {
      xPos = window.innerWidth - 130;
    }
    // correction to keep dialog from going off screen to the left
    if (xPos < 130) {
      xPos = 130;
    }
    xPos -= 117;
    setXPos(xPos);
    setYPos(event.clientY + 20);
    setShowDialog(true);
  }

  function handleSubmit(hours, minutes, eventName) {
    const eventDate = new Date();
    eventDate.setFullYear(year);
    eventDate.setMonth(month);
    eventDate.setDate(day);
    eventDate.setHours(hours);
    eventDate.setMinutes(minutes);
    setEvents(events => [...events, { eventDate, eventName }]);
    setShowDialog(false);
  }

  return (
    <div className="App">
      <EventDialog
        showDialog={showDialog}
        xPos={xPos}
        yPos={yPos}
        onSubmit={handleSubmit}
      />
      <MonthPicker
        month={month}
        year={year}
        onMonthChange={handleMonthChange}
      />
      <DayPicker month={month} year={year} onClick={handleShowDialog} />
      <EventDisplay events={events} />
    </div>
  );
}

export default App;
