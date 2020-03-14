import React from "react";
import * as styles from "./styles";

export default function WeekDisplay({ week }) {
  return (
    <tr>
      {week.map(day => (
        <td>{day.day}</td>
      ))}
    </tr>
  );
}
