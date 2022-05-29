import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Button from "../Button";
import userEvent from "@testing-library/user-event";

describe("Button", () => {
  it("Displays text", () => {
    render(<Button text="Test text" />);
    const btnText = screen.getByText("Test text");
    expect(btnText).toBeInTheDocument();
  });

  it("Calls a function when clicked", () => {
    const testFunction = jest.fn();
    render(<Button text="Test text" onClick={testFunction} />);
    userEvent.click(screen.getByText("Test text"));
    expect(testFunction).toHaveBeenCalled();
  });
});
