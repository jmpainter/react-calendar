import React from "react";
import * as styled from "./styles";

export default function DayPicker() {
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
    </styled.CalendarMonth>
  );
}
