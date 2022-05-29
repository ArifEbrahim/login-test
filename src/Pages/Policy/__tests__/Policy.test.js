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

  it("should render policy sections", () => {
    render(<Policy />);
    const policyRef = screen.getByText("Policy reference");
    const coverType = screen.getByText("Cover type");
    const car = screen.getByText("Car");
    const name = screen.getByText("Name");
    const address = screen.getByText("Address");
    expect(policyRef).toBeInTheDocument();
    expect(coverType).toBeInTheDocument();
    expect(car).toBeInTheDocument(name);
    expect(address).toBeInTheDocument();
  });

  it("has a sign out button", () => {
    render(<Policy />);
    const signOutBtn = screen.getByText("Sign out");
    expect(signOutBtn).toBeInTheDocument();
  });
});
