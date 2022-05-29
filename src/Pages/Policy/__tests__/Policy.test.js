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

  it('should render policy sections', () => {
    render(<Policy />);
    const policyRef = screen.getByText("Policy reference")
    const coverType = screen.getByText('Cover type')
    const car = screen.getByText('Car')
    const address = screen.getByText('Address')
    expect(policyRef).toBeInTheDocument();
    expect(coverType).toBeInTheDocument();
    expect(car).toBeInTheDocument();
    expect(address).toBeInTheDocument();
  })
});