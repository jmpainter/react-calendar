import React from "react";
import { getMonth } from "../utils";
import * as styles from "./styles";

export default function EventDisplay({ events }) {
  events = events.sort((a, b) => b.eventDate - a.eventDate);
  return (
    <div>
      <styles.EventList>
        {events.map((event, index) => {
          const { eventDate, eventName } = event;
          return (
            <styles.EventListLine
              key={index}
            >{`${eventDate.getDate()}  ${getMonth(
              eventDate.getMonth()
            )} ${eventDate.getFullYear()} ${eventDate.getHours()}:${eventDate.getMinutes()} - ${eventName}`}</styles.EventListLine>
          );
        })}
      </styles.EventList>
    </div>
  );
}
