import React from "react";
import { getByTestId, render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import axios from "axios";
import Policy from "../index";
import APIResponse from "../__mocks__/APIResponse.json";
import { act } from "react-dom/test-utils";

jest.mock("axios");

describe("Policy page", () => {
  // it("has an element with the correct header text", async () => {
  //   render(<Policy />);
  //   await waitFor(() => {
  //     expect(screen.getByText('No data')).not.toBeInTheDocument();
  //   });
  //   const header = screen.getByText("My Policy");
  //   expect(header).toBeInTheDocument();
  // });

  // it("should render policy sections", () => {
  //   render(<Policy />);
  //   const policyRef = screen.getByText("Policy reference");
  //   const coverType = screen.getByText("Cover type");
  //   const car = screen.getByText("Car");
  //   const name = screen.getByText("Name");
  //   const address = screen.getByText("Address");
  //   expect(policyRef).toBeInTheDocument();
  //   expect(coverType).toBeInTheDocument();
  //   expect(car).toBeInTheDocument(name);
  //   expect(address).toBeInTheDocument();
  // });

  // it("has a sign out button", () => {
  //   render(<Policy />);
  //   const signOutBtn = screen.getByText("Sign out");
  //   expect(signOutBtn).toBeInTheDocument();
  // });

  // describe("API tests", () => {
  //   beforeEach(() => {
  //     localStorage.setItem("token", "Abc123");
  //   });

  //   afterEach(() => {
  //     localStorage.clear();
  //   });

  //   it("calls the API on render with the correct data", () => {
  //     const url = "https://api.bybits.co.uk/policys/details";
  //     const config = {
  //       headers: {
  //         environment: "mock",
  //         Authorization: "Bearer Abc123",
  //         "Content-type": "application/json",
  //       },
  //     };
  //     render(<Policy />);
  //     expect(axios.get).toHaveBeenCalledWith(url, config);
  //   });

  //   it("displays data correctly from the API", async () => {
  //     axios.get.mockResolvedValue({ data: APIResponse });
  //     await act(() => {
  //       render(<Policy />);
  //     });
  //     await waitFor(() => {
  //       expect(axios.get).toHaveBeenCalled();
  //     });
  //     expect(screen.getByText("apple orange pear")).toBeInTheDocument();
  //   });
  // });

  it("displays a loading message while fetching data", () => {
    render(<Policy />);
    const loadingEl = screen.getByText("Loading...");
    expect(loadingEl).toBeInTheDocument();
  });

  describe("Policy page elements", () => {
    beforeEach(() => {
      axios.get.mockResolvedValue({ data: APIResponse });
    });

    it("should render policy sections", async () => {
      render(<Policy />);
      const policyRef = await screen.findByText("Policy reference");
      const coverType = await screen.findByText("Cover type");
      const car = await screen.findByText("Car");
      const name = await screen.findByText("Name");
      const address = await screen.findByText("Address");
      expect(policyRef).toBeInTheDocument();
      expect(coverType).toBeInTheDocument();
      expect(car).toBeInTheDocument();
      expect(address).toBeInTheDocument();
      expect(name).toBeInTheDocument();
    });

    it("has a sign out button", async () => {
      render(<Policy />);
      const signOutBtn = await screen.findByText("Sign out");
      expect(signOutBtn).toBeInTheDocument();
    });
  });

  describe("API tests", () => {
    beforeEach(() => {
      localStorage.setItem("token", "Abc123");
    });

    afterEach(() => {
      localStorage.clear();
    });

    it("calls the API on render with the correct data", () => {
      const url = "https://api.bybits.co.uk/policys/details";
      const config = {
        headers: {
          environment: "mock",
          Authorization: "Bearer Abc123",
          "Content-type": "application/json",
        },
      };
      render(<Policy />);
      expect(axios.get).toHaveBeenCalledWith(url, config);
    });

    it("displays data correctly from the API", async () => {
      axios.get.mockResolvedValue({ data: APIResponse });
      render(<Policy />)
      const policyRef = await screen.findByText("apple orange pear");
      expect(policyRef).toBeInTheDocument();
    });
  });
});
