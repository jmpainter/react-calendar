import React, { useState } from "react";
import * as styled from "./styles";

export default function EventDialog({ showDialog, xPos, yPos, onSubmit }) {
  const [hours, setHours] = useState(null);
  const [minutes, setMinutes] = useState(null);
  const [eventName, setEventName] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  function handleSubmit(event) {
    setErrorMessage("");
    event.preventDefault();
    if (
      !Number.isInteger(parseInt(hours)) ||
      parseInt(hours) < 0 ||
      parseInt(hours) > 23
    ) {
      setErrorMessage("Please enter a value from 0 to 23 for hours");
      return;
    }
    if (
      !Number.isInteger(parseInt(minutes)) ||
      parseInt(minutes) < 0 ||
      parseInt(minutes) > 59
    ) {
      setErrorMessage("Please enter a value from 0 to 59 for minutes");
      return;
    }
    if (!eventName) {
      setErrorMessage("Please enter an event name");
      return;
    }
    onSubmit(hours, minutes, eventName);
  }

  return (
    <styled.Dialog showDialog={showDialog} xPos={xPos} yPos={yPos}>
      <form onSubmit={event => handleSubmit(event)}>
        <styled.ErrorMessage>{errorMessage}</styled.ErrorMessage>
        <div>
          <styled.NarrowInput
            type="text"
            placeholder="Hour"
            name="hour"
            onChange={event => setHours(event.target.value)}
          />
          <styled.NarrowInput
            type="text"
            placeholder="Minute"
            name="minute"
            onChange={event => setMinutes(event.target.value)}
          />
        </div>
        <styled.WideInput
          type="text"
          placeholder="Event name"
          name="eventName"
          onChange={event => setEventName(event.target.value)}
        />
        <div>
          <styled.SaveButton type="submit">Save</styled.SaveButton>
        </div>
      </form>
    </styled.Dialog>
  );
}
