import React from "react";
import { render } from "@testing-library/react";
import EventDisplay from "./EventDisplay";

describe("<EventDisplay /> tests", () => {
  test("renders a list of events", () => {
    const mockEvents = [
      { eventDate: new Date("2020-01-17T03:01:00"), eventName: "Event1" },
      { eventDate: new Date("2020-02-18T03:02:00"), eventName: "Event2" },
      { eventDate: new Date("2020-03-19T03:03:00"), eventName: "Event3" }
    ];
    const { getByText } = render(<EventDisplay events={mockEvents} />);

    expect(getByText("17 January 2020 3:01 - Event1")).toBeTruthy();
    expect(getByText("18 February 2020 3:02 - Event2")).toBeTruthy();
    expect(getByText("19 March 2020 3:03 - Event3")).toBeTruthy();
  });
});
