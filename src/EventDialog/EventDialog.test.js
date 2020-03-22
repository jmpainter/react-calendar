import React from "react";
import { render, fireEvent } from "@testing-library/react";
import EventDialog from "./EventDialog";

const func = jest.fn();
const dialog = (
  <EventDialog showDialog={true} xPos={25} yPos={30} onSubmit={func} />
);

describe("<EventDialog /> tests", () => {
  test("does not appear if showDialog is false", () => {
    const { getByTestId } = render(
      <EventDialog showDialog={false} xPos={0} yPos={0} onSubmit={func} />
    );
    const dialogElement = getByTestId("event-dialog");
    expect(getComputedStyle(dialogElement).display).toEqual("none");
  });

  test("appears if showDialog is true", () => {
    const { getByTestId } = render(dialog);
    const dialogElement = getByTestId("event-dialog");
    expect(getComputedStyle(dialogElement).display).toEqual("block");
  });

  test("adds the correct x position to style", () => {
    const { getByTestId } = render(dialog);
    const dialogElement = getByTestId("event-dialog");
    expect(getComputedStyle(dialogElement).left).toEqual("25px");
  });

  test("adds the correct y position to style", () => {
    const { getByTestId } = render(dialog);
    const dialogElement = getByTestId("event-dialog");
    expect(getComputedStyle(dialogElement).top).toEqual("30px");
  });

  test("provides error message if hours is missing", () => {
    const { getByText, getByTestId } = render(dialog);
    const saveButton = getByText("Save");
    fireEvent.click(saveButton);
    const errorMessage = getByTestId("error-message");
    expect(errorMessage.textContent).toEqual(
      "Please enter a value from 0 to 23 for hours"
    );
  });

  test("provides error message if minutes is missing", () => {
    const { getByText, getByPlaceholderText, getByTestId } = render(dialog);
    const hoursInput = getByPlaceholderText("Hour");
    fireEvent.change(hoursInput, { target: { value: "12" } });
    const saveButton = getByText("Save");
    fireEvent.click(saveButton);
    const errorMessage = getByTestId("error-message");
    expect(errorMessage.textContent).toEqual(
      "Please enter a value from 0 to 59 for minutes"
    );
  });

  test("provides error message if message is missing", () => {
    const { getByText, getByPlaceholderText, getByTestId } = render(dialog);
    const hoursInput = getByPlaceholderText("Hour");
    fireEvent.change(hoursInput, { target: { value: "12" } });
    const minutesInput = getByPlaceholderText("Minute");
    fireEvent.change(minutesInput, { target: { value: "30" } });
    const saveButton = getByText("Save");
    fireEvent.click(saveButton);
    const errorMessage = getByTestId("error-message");
    expect(errorMessage.textContent).toEqual("Please enter an event name");
  });

  test("provides error message if hours is not a number", () => {
    const { getByText, getByPlaceholderText, getByTestId } = render(dialog);
    const hoursInput = getByPlaceholderText("Hour");
    fireEvent.change(hoursInput, { target: { value: "test" } });
    const saveButton = getByText("Save");
    fireEvent.click(saveButton);
    const errorMessage = getByTestId("error-message");
    expect(errorMessage.textContent).toEqual(
      "Please enter a value from 0 to 23 for hours"
    );
  });

  test("provides error message if hours is over 23", () => {
    const { getByText, getByPlaceholderText, getByTestId } = render(dialog);
    const hoursInput = getByPlaceholderText("Hour");
    fireEvent.change(hoursInput, { target: { value: "24" } });
    const saveButton = getByText("Save");
    fireEvent.click(saveButton);
    const errorMessage = getByTestId("error-message");
    expect(errorMessage.textContent).toEqual(
      "Please enter a value from 0 to 23 for hours"
    );
  });

  test("provides error message if hours is under 0", () => {
    const { getByText, getByPlaceholderText, getByTestId } = render(dialog);
    const hoursInput = getByPlaceholderText("Hour");
    fireEvent.change(hoursInput, { target: { value: "-1" } });
    const saveButton = getByText("Save");
    fireEvent.click(saveButton);
    const errorMessage = getByTestId("error-message");
    expect(errorMessage.textContent).toEqual(
      "Please enter a value from 0 to 23 for hours"
    );
  });

  test("provides error message if minutes is not a number", () => {
    const { getByText, getByPlaceholderText, getByTestId } = render(dialog);
    const hoursInput = getByPlaceholderText("Hour");
    fireEvent.change(hoursInput, { target: { value: "12" } });
    const minutesInput = getByPlaceholderText("Minute");
    fireEvent.change(minutesInput, { target: { value: "test" } });
    const saveButton = getByText("Save");
    fireEvent.click(saveButton);
    const errorMessage = getByTestId("error-message");
    expect(errorMessage.textContent).toEqual(
      "Please enter a value from 0 to 59 for minutes"
    );
  });

  test("provides error message if minutes is over 59", () => {
    const { getByText, getByPlaceholderText, getByTestId } = render(dialog);
    const hoursInput = getByPlaceholderText("Hour");
    fireEvent.change(hoursInput, { target: { value: "12" } });
    const minutesInput = getByPlaceholderText("Minute");
    fireEvent.change(minutesInput, { target: { value: "60" } });
    const saveButton = getByText("Save");
    fireEvent.click(saveButton);
    const errorMessage = getByTestId("error-message");
    expect(errorMessage.textContent).toEqual(
      "Please enter a value from 0 to 59 for minutes"
    );
  });

  test("provides error message if minutes is under 0", () => {
    const { getByText, getByPlaceholderText, getByTestId } = render(dialog);
    const hoursInput = getByPlaceholderText("Hour");
    fireEvent.change(hoursInput, { target: { value: "12" } });
    const minutesInput = getByPlaceholderText("Minute");
    fireEvent.change(minutesInput, { target: { value: "-1" } });
    const saveButton = getByText("Save");
    fireEvent.click(saveButton);
    const errorMessage = getByTestId("error-message");
    expect(errorMessage.textContent).toEqual(
      "Please enter a value from 0 to 59 for minutes"
    );
  });

  test("calls onSubmit when save is pressed for a correct form", () => {
    const { getByText, getByPlaceholderText, getByTestId } = render(dialog);
    const hoursInput = getByPlaceholderText("Hour");
    fireEvent.change(hoursInput, { target: { value: "12" } });
    const minutesInput = getByPlaceholderText("Minute");
    fireEvent.change(minutesInput, { target: { value: "30" } });
    const eventInput = getByPlaceholderText("Event name");
    fireEvent.change(eventInput, { target: { value: "Test Event" } });
    const saveButton = getByText("Save");
    fireEvent.click(saveButton);
    const errorMessage = getByTestId("error-message");
    expect(errorMessage.textContent).toEqual("");
    expect(func).toHaveBeenCalled();
  });
});
