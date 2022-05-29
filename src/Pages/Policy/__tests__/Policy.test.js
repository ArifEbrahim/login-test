import React from "react";
import Policy from "../index";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import axios from "axios";

jest.mock("axios");

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

  describe('API tests', () => {

    beforeEach(() => {
      localStorage.setItem("token", "Abc123");
    })

    afterEach(() => {
      localStorage.clear();
    })

    it("calls the API on render with the correct data", () => {
      const url = 'https://api.bybits.co.uk/policys/details';
      const config = {
        headers: {
          "environment": "mock",
          "Authorization": "Bearer Abc123",
          "Content-type": "application/json"
        }
      }
      render(<Policy />);
      expect(axios.get).toHaveBeenCalledWith(url, config);
    });
  })
});
