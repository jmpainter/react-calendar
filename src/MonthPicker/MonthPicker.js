import React from "react";
import * as styles from "./styles";

export default function MonthPicker({ month, year, onMonthChange }) {
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];
  return (
    <styles.Picker>
      <styles.Arrow onClick={() => onMonthChange(false)}>{"<"}</styles.Arrow>
      <div>
        <styles.Month>{monthNames[month]}</styles.Month>
        <styles.Year>{year}</styles.Year>
      </div>
      <styles.Arrow onClick={() => onMonthChange(true)}>{">"}</styles.Arrow>
    </styles.Picker>
  );
}
