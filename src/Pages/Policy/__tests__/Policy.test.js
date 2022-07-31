import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import axios from "axios";
import userEvent from "@testing-library/user-event";
import Policy from "../index";
import APIResponse from "../__mocks__/APIResponse.json";

jest.mock("axios");

const mockedUseNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUseNavigate,
}));

describe("Policy page", () => {
  it("displays a loading message while fetching data", () => {
    render(<Policy />);
    const loadingEl = screen.getByText(/Loading.../);
    expect(loadingEl).toBeInTheDocument();
  });

  describe("Policy page elements", () => {
    beforeEach(() => {
      axios.get.mockResolvedValue({ data: APIResponse });
    });

    it("should render policy sections", async () => {
      render(<Policy />);
      const policyRef = await screen.findByText(/Policy reference:/);
      const coverType = await screen.findByText(/Cover type:/);
      const car = await screen.findByText(/Car:/);
      const name = await screen.findByText(/Name:/);
      const address = await screen.findByText(/Address:/);
      expect(policyRef).toBeInTheDocument();
      expect(coverType).toBeInTheDocument();
      expect(car).toBeInTheDocument();
      expect(address).toBeInTheDocument();
      expect(name).toBeInTheDocument();
    });

    it("has a sign out button", async () => {
      render(<Policy />);
      const signOutBtn = await screen.findByText(/Sign out/);
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
      render(<Policy />);
      const policyRef = await screen.findByText(/apple orange pear/);
      const coverType = await screen.findByText(/Comprehensive/);
      const car = await screen.findByText(/Tesla S black - WO123XX/);
      const name = await screen.findByText(/Dave Jones/);
      const address = await screen.findByText(/Flat 1, 11 The Street, Little Hampton, W53TR/);
      expect(policyRef).toBeInTheDocument();
      expect(coverType).toBeInTheDocument();
      expect(car).toBeInTheDocument();
      expect(address).toBeInTheDocument();
      expect(name).toBeInTheDocument();
    });
  });

  it('sign out button signs out the user', async () => {
    axios.get.mockResolvedValue({ data: APIResponse });
    render(
        <Policy />
    );
    await screen.findByText(/Dave Jones/);
    userEvent.click(screen.getByText(/Sign out/));
    expect(mockedUseNavigate).toHaveBeenCalled();
  })
});
