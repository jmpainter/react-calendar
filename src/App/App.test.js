import React from "react";
import { render, fireEvent } from "@testing-library/react";
import App from "./App";
import { getMonth } from "../utils";

describe("<App /> tests", () => {
  test("displays current month on start", () => {
    const { getByText } = render(<App />);
    const dateNow = new Date();
    const currentMonth = getMonth(dateNow.getMonth());
    expect(getByText(currentMonth)).toBeTruthy();
  });

  test("displays the previous month on left arrow click", () => {
    const { getByTestId, getByText } = render(<App />);
    const dateNow = new Date();
    let month = dateNow.getMonth();
    if (month === 0) {
      month = 11;
    } else {
      month--;
    }
    const previousMonth = getMonth(month);
    const previousMonthButton = getByTestId("previous-month");
    fireEvent.click(previousMonthButton);
    expect(getByText(previousMonth)).toBeTruthy();
  });

  test("displays the next month on right arrow click", () => {
    const { getByTestId, getByText } = render(<App />);
    const dateNow = new Date();
    let month = dateNow.getMonth();
    if (month === 11) {
      month = 0;
    } else {
      month++;
    }
    const nextMonth = getMonth(month);
    const nextMonthButton = getByTestId("next-month");
    fireEvent.click(nextMonthButton);
    expect(getByText(nextMonth)).toBeTruthy();
  });

  test("adds an event to the event list", () => {
    const {
      getByTestId,
      getAllByText,
      getByText,
      getByPlaceholderText
    } = render(<App />);
    const dayOne = getAllByText("1")[0];
    fireEvent.click(dayOne);
    const hoursInput = getByPlaceholderText("Hour");
    fireEvent.change(hoursInput, { target: { value: "12" } });
    const minutesInput = getByPlaceholderText("Minute");
    fireEvent.change(minutesInput, { target: { value: "30" } });
    const eventInput = getByPlaceholderText("Event name");
    fireEvent.change(eventInput, { target: { value: "Test Event" } });
    const saveButton = getByText("Save");
    fireEvent.click(saveButton);
    const eventList = getByTestId("event-list");
    expect(eventList.children.length).toEqual(1);
  });
});
