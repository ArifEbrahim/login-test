import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import userEvent from "@testing-library/user-event";
import axios from "axios";
import Login from "../index";
import { BrowserRouter } from "react-router-dom";

jest.mock("axios");

const mockedUseNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUseNavigate,
}));

describe("Login page", () => {
  it("has an element with the correct header text", () => {
    render(
      <BrowserRouter>
        <Login />
      </BrowserRouter>
    );
    const header = screen.getByText("Sign In");
    expect(header).toBeInTheDocument();
  });

  it("has a username label & input field", () => {
    render(
      <BrowserRouter>
        <Login />
      </BrowserRouter>
    );
    const usernameLabel = screen.getByLabelText("Username");
    const usernameInput = screen.getByTestId("username-input");
    expect(usernameLabel).toBeInTheDocument();
    expect(usernameInput).toBeInTheDocument();
  });

  it("has a password label & input field", () => {
    render(
      <BrowserRouter>
        <Login />
      </BrowserRouter>
    );
    const passwordLabel = screen.getByLabelText("Password");
    const passwordInput = screen.getByTestId("password-input");
    expect(passwordLabel).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
  });

  it("has a sign in button", () => {
    render(
      <BrowserRouter>
        <Login />
      </BrowserRouter>
    );
    const submitBtn = screen.getByText("Sign in");
    expect(submitBtn).toBeInTheDocument();
  });

  it("calls axios when the sign in button in clicked", () => {
    render(
      <BrowserRouter>
        <Login />
      </BrowserRouter>
    );
    userEvent.click(screen.getByText("Sign in"));
    expect(axios.post).toHaveBeenCalled();
  });

  describe("API tests", () => {
    beforeEach(() => {
      axios.post.mockReturnValue({
        data: {
          access_token: "123",
        },
      });
    });

    it("calls the API with the correct data", () => {
      const url = "https://api.bybits.co.uk/auth/token";
      const config = {
        headers: {
          environment: "mock",
          "Content-Type": "application/json",
        },
      };
      const data = {
        username: "testuser",
        password: "1234",
        type: "USER_PASSWORD_AUTH",
      };
      render(
        <BrowserRouter>
          <Login />
        </BrowserRouter>
      );
      userEvent.type(screen.getByTestId("username-input"), data.username);
      userEvent.type(screen.getByTestId("password-input"), data.password);
      userEvent.click(screen.getByText("Sign in"));
      expect(axios.post).toHaveBeenCalledWith(url, data, config);
    });

    it("saves the auth token correctly", async () => {
      render(
        <BrowserRouter>
          <Login />
        </BrowserRouter>
      );
      userEvent.click(screen.getByText("Sign in"));
      await waitFor(() => expect(axios.post).toHaveBeenCalled());
      expect(localStorage.getItem("token")).toBe("123");
    });

    it("redirects user to the policy page on successful login", async () => {
      render(
        <BrowserRouter>
          <Login />
        </BrowserRouter>
      );
      userEvent.click(screen.getByText("Sign in"));
      await waitFor(() => expect(axios.post).toHaveBeenCalled());
      expect(mockedUseNavigate).toHaveBeenCalled();
    });
  });
});
