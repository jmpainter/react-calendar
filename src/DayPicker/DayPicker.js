import React from "react";
import * as styled from "./styles";

export default function DayPicker({ month, year }) {
  const firstDay = new Date(year, month);
  const startIndex = firstDay.getDay();
  console.log(year);
  console.log(month);
  console.log(firstDay);

  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const daysInLastMonth = new Date(year, month, 0).getDate();

  const days = new Array(42);
  // fill days array with this month's days
  for (let i = 1; i <= daysInMonth; i++) {
    days[i + startIndex - 1] = { day: i, clickable: true };
  }
  // fill beginning of days array with last month's days
  for (let i = startIndex - 1, j = daysInLastMonth; i >= 0; i--, j--) {
    days[i] = { day: j, clickable: false };
  }
  // reduce length of days array if extra week is not needed for display
  if (startIndex + daysInMonth < 35) {
    days.splice(35, 7);
  }
  // fill end of days array with first days of next month
  for (let i = startIndex + daysInMonth, j = 1; i < days.length; i++, j++) {
    days[i] = { day: j, clickable: false };
  }
  console.log(days);
  const weeks = [];
  // for(let i = )

  return (
    <styled.CalendarMonth>
      <thead>
        <tr>
          <th>Sun</th>
          <th>Mon</th>
          <th>Tue</th>
          <th>Wed</th>
          <th>Thu</th>
          <th>Fri</th>
          <th>Sat</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td></td>
        </tr>
      </tbody>
    </styled.CalendarMonth>
  );
}
