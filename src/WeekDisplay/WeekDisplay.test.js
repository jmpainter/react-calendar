import React from "react";
import { render, fireEvent } from "@testing-library/react";
import WeekDisplay from "./WeekDisplay";

const mockWeek = [
  { day: 29, clickable: false },
  { day: 30, clickable: false },
  { day: 1, clickable: true },
  { day: 2, clickable: true },
  { day: 3, clickable: true },
  { day: 4, clickable: true },
  { day: 5, clickable: true }
];

const func = jest.fn();

const weekDisplay = (
  <table>
    <tbody>
      <WeekDisplay month={0} year={2020} week={mockWeek} onClick={func} />
    </tbody>
  </table>
);

afterEach(() => {
  jest.clearAllMocks();
});

describe("<WeekDisplay /> tests", () => {
  test("renders a list of 7 Days", () => {
    const { getAllByTestId } = render(weekDisplay);
    expect(getAllByTestId("day")).toHaveLength(7);
  });

  test("fires onClick method when active day is clicked", () => {
    const { getByText } = render(weekDisplay);
    const activeDay = getByText(/1/);
    fireEvent.click(activeDay);
    expect(func).toHaveBeenCalled();
  });

  test("does not fire onClick method when inactive day is clicked", () => {
    const { getByText } = render(weekDisplay);
    const inactiveDay = getByText(/29/);
    fireEvent.click(inactiveDay);
    expect(func).not.toHaveBeenCalled();
  });
});
