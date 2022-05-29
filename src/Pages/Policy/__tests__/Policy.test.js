import React from "react";
import Policy from "../index";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

describe("Policy page", () => {
  it("has an element with the correct header text", () => {
    render(<Policy />);
    const header = screen.getByText("My Policy");
    expect(header).toBeInTheDocument();
  });
});
