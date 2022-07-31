import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import React from "react";
import PolicySection from "../PolicySection";

describe("PolicySection", () => {
  it("Correctly displays a label and text field", () => {
    render(<PolicySection label="Test label" text="Test text" />);
    const label = screen.getByText(/Test label:/);
    const text = screen.getByText(/Test text/);
    expect(label).toBeInTheDocument();
    expect(text).toBeInTheDocument();
  });
});
