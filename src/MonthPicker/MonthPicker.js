import React from "react";
import * as styles from "./styles";
import { getMonth } from "../utils";

export default function MonthPicker({ month, year, onMonthChange }) {
  return (
    <styles.Picker>
      <styles.Arrow onClick={() => onMonthChange(false)}>{"<"}</styles.Arrow>
      <div>
        <styles.Month>{getMonth(month)}</styles.Month>
        <styles.Year>{year}</styles.Year>
      </div>
      <styles.Arrow onClick={() => onMonthChange(true)}>{">"}</styles.Arrow>
    </styles.Picker>
  );
}
