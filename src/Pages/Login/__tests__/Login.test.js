import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import userEvent from "@testing-library/user-event";
import axios from "axios";
import Login from "../index";

jest.mock("axios");

describe("Login page", () => {
  it("has an element with the correct header text", () => {
    render(<Login />);
    const header = screen.getByText("Sign In");
    expect(header).toBeInTheDocument();
  });

  it("has a username label & input field", () => {
    render(<Login />);
    const usernameLabel = screen.getByLabelText("Username");
    const usernameInput = screen.getByTestId("username-input");
    expect(usernameLabel).toBeInTheDocument();
    expect(usernameInput).toBeInTheDocument();
  });

  it("has a password label & input field", () => {
    render(<Login />);
    const passwordLabel = screen.getByLabelText("Password");
    const passwordInput = screen.getByTestId("password-input");
    expect(passwordLabel).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
  });

  it("has a sign in button", () => {
    render(<Login />);
    const submitBtn = screen.getByText("Sign in");
    expect(submitBtn).toBeInTheDocument();
  });

  it("calls axios when the sign in button in clicked", () => {
    render(<Login />);
    userEvent.click(screen.getByText("Sign in"));
    expect(axios.post).toHaveBeenCalled();
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
    render(<Login />);
    userEvent.type(screen.getByTestId("username-input"), data.username);
    userEvent.type(screen.getByTestId("password-input"), data.password);
    userEvent.click(screen.getByText("Sign in"));
    expect(axios.post).toHaveBeenCalledWith(url, data, config);
  });

  it("saves the auth token correctly", async () => {
    axios.post.mockReturnValue({
      data: {
        access_token: "123",
      },
    });
    render(<Login />);
    userEvent.click(screen.getByText("Sign in"));
    await waitFor(() => expect(axios.post).toHaveBeenCalled());
    expect(localStorage.getItem("token")).toBe("123");
  });
});
