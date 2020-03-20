import React from "react";
import { getMonth } from "../utils";
import * as styles from "./styles";
import PropTypes from "prop-types";

export default function EventDisplay({ events }) {
  events = events.sort((a, b) => a.eventDate - b.eventDate);
  return (
    <div>
      <styles.EventList>
        {events.map((event, index) => {
          const { eventDate, eventName } = event;
          return (
            <styles.EventListLine
              key={index}
            >{`${eventDate.getDate()} ${getMonth(
              eventDate.getMonth()
            )} ${eventDate.getFullYear()} ${eventDate.getHours()}:${eventDate
              .getMinutes()
              .toString()
              .padStart(2, "0")} - ${eventName}`}</styles.EventListLine>
          );
        })}
      </styles.EventList>
    </div>
  );
}

EventDisplay.propTypes = {
  events: PropTypes.array.isRequired
};
