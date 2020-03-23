import React from "react";
import PropTypes from "prop-types";
import * as styles from "./styles";
import { getMonth } from "../utils";

export default function MonthPicker({ month, year, onMonthChange }) {
  return (
    <styles.Picker>
      <styles.Arrow
        data-testid="previous-month"
        onClick={() => onMonthChange(false)}
      >
        {"<"}
      </styles.Arrow>
      <div>
        <styles.Month>{getMonth(month)}</styles.Month>
        <styles.Year>{year}</styles.Year>
      </div>
      <styles.Arrow
        data-testid="next-month"
        onClick={() => onMonthChange(true)}
      >
        {">"}
      </styles.Arrow>
    </styles.Picker>
  );
}

MonthPicker.propTypes = {
  month: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  onMonthChange: PropTypes.func.isRequired
};
