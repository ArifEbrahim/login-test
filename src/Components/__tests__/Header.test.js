import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import React from "react";
import Header from "../Header";

describe("Header", () => {
  it("Correctly displays a header", () => {
    render(<Header text="Test header" />);
    const headerEl = screen.getByText(/Test header/);
    expect(headerEl).toBeInTheDocument();
  });
});
