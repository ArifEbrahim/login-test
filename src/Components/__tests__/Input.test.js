import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import userEvent from "@testing-library/user-event";
import Input from "../Input";

describe("Input", () => {
  it("Should render a label", () => {
    render(<Input label="Test label" id="Test id" />);
    const label = screen.getByLabelText("Test label");
    expect(label).toBeInTheDocument();
  });

  it("Should render an input", () => {
    render(<Input label="Test label" id="Test id" />);
    const input = screen.getByTestId("Test id-input");
    expect(input).toBeInTheDocument();
  });

  it("Should call an onChange function", () => {
    const testFunction = jest.fn();
    render(<Input label="Test label" id="Test id" onChange={testFunction} />);
    const input = screen.getByTestId("Test id-input");
    userEvent.type(input, "ABC");
    expect(testFunction).toHaveBeenCalledTimes(3);
  });
});
