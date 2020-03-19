import React from "react";
import { render, fireEvent } from "@testing-library/react";
import MonthPicker from "./MonthPicker";

describe("<MonthPicker /> tests", () => {
  test("renders correct month name as H1", () => {
    const { getByText } = render(
      <MonthPicker month={0} year={2020} onMonthChange={() => {}} />
    );
    const header1 = getByText(/January/);
    expect(header1.nodeName).toEqual("H1");
  });

  test("renders correct year name as H2", () => {
    const { getByText } = render(
      <MonthPicker month={0} year={2020} onMonthChange={() => {}} />
    );
    const header2 = getByText(/2020/);
    expect(header2.nodeName).toEqual("H2");
  });

  test("calls onClick when right arrow is clicked", () => {
    const func = jest.fn(() => {});
    const { getByText } = render(
      <MonthPicker month={0} year={2020} onMonthChange={func} />
    );
    const rightArrow = getByText(/>/);
    fireEvent.click(rightArrow);
    expect(func).toHaveBeenCalled();
  });

  test("calls onClick when left arrow is clicked", () => {
    const func = jest.fn(() => {});
    const { getByText } = render(
      <MonthPicker month={0} year={2020} onMonthChange={func} />
    );
    const leftArrow = getByText(/</);
    fireEvent.click(leftArrow);
    expect(func).toHaveBeenCalled();
  });
});
