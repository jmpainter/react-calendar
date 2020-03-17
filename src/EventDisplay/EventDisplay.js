import React from "react";
import { getMonth } from "../utils";

export default function EventDisplay({ events }) {
  events = events.sort((a, b) => b.eventDate - a.eventDate);
  return (
    <div>
      {events.map((event, index) => {
        const { eventDate, eventName } = event;
        return (
          <p key={index}>{`${eventDate.getDate()} ${getMonth(
            eventDate.getMonth()
          )} ${eventDate.getHours()}:${eventDate.getMinutes()} ${eventName}`}</p>
        );
      })}
    </div>
  );
}
