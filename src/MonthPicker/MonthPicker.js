import React from "react";
import * as styles from "./styles";

export default function MonthPicker() {
  return (
    <styles.Picker>
      <styles.Arrow>{"<"}</styles.Arrow>
      <div>
        <styles.Month>January</styles.Month>
        <styles.Year>2020</styles.Year>
      </div>
      <styles.Arrow>{">"}</styles.Arrow>
    </styles.Picker>
  );
}
