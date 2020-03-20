import React from "react";
import * as styles from "./styles";
import PropTypes from "prop-types";

export default function WeekDisplay({ week, month, year, onClick }) {
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
          <styles.TableData key={index} today={isToday} data-testid="day">
            <styles.Day
              active={day.clickable}
              onClick={day.clickable ? event => onClick(day.day, event) : null}
            >
              {day.day}
            </styles.Day>
          </styles.TableData>
        );
      })}
    </tr>
  );
}

WeekDisplay.proptTypes = {
  week: PropTypes.array.isRequired,
  month: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired
};
