import React from "react";
import * as styles from "./styles";

export default function WeekDisplay({ week, month, year }) {
  const today = new Date();
  return (
    <tr>
      {week.map((day, index) => {
        let isToday = false;
        if (
          day.clickable &&
          today.getDate() === day.day &&
          today.getMonth() === month &&
          today.getFullYear() === year
        ) {
          isToday = true;
        }
        return (
          <styles.TableData key={index} today={isToday} active={day.clickable}>
            {day.day}
          </styles.TableData>
        );
      })}
    </tr>
  );
}
