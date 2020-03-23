import React from "react";
import { render } from "@testing-library/react";
import DayPicker from "./DayPicker";

describe("<DayPicker /> tests", () => {
  test("renders a row of day names", () => {
    const { getByText } = render(
      <DayPicker month={3} year={2020} onClick={() => {}} />
    );
    expect(getByText("Sun")).toBeTruthy();
    expect(getByText("Mon")).toBeTruthy();
    expect(getByText("Tue")).toBeTruthy();
    expect(getByText("Wed")).toBeTruthy();
    expect(getByText("Thu")).toBeTruthy();
    expect(getByText("Fri")).toBeTruthy();
    expect(getByText("Sat")).toBeTruthy();
  });

  test("renders the right number of days for a given month and year", () => {
    const { getAllByTestId } = render(
      <DayPicker month={3} year={2020} onClick={() => {}} />
    );
    const days = getAllByTestId("day");
    expect(days).toHaveLength(35);
  });

  test("renders the correct days from the previous month", () => {
    const { getAllByTestId } = render(
      <DayPicker month={3} year={2020} onClick={() => {}} />
    );
    const days = getAllByTestId("day");
    expect(days[0].firstElementChild.textContent).toEqual("29");
    expect(days[1].firstElementChild.textContent).toEqual("30");
    expect(days[2].firstElementChild.textContent).toEqual("31");
  });

  test("renders the correct days from the next month", () => {
    const { getAllByTestId } = render(
      <DayPicker month={3} year={2020} onClick={() => {}} />
    );
    const days = getAllByTestId("day");
    expect(days[days.length - 1].firstElementChild.textContent).toEqual("2");
    expect(days[days.length - 2].firstElementChild.textContent).toEqual("1");
  });
});
