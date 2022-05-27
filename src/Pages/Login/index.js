import React, { useState } from "react";
import axios from "axios";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const url = "https://api.bybits.co.uk/auth/token";
  const config = {
    headers: {
      environment: "mock",
      "Content-Type": "application/json",
    },
  };

  const handleClick = async () => {
    const data = {
      username,
      password,
      type: "USER_PASSWORD_AUTH",
    };
    try {
      const response = await axios.post(url, data, config);
      const access_token = response.data.access_token;
      localStorage.setItem('token', access_token);
    } catch (error) {
      console.log(error)
    }

  };

  return (
    <div>
      <h2>Sign In</h2>

        <label htmlFor="username">User Name</label>
        <input
          type="text"
          id="username"
          data-testid="username-input"
          onChange={(e) => setUsername(e.target.value)}
          value={username}
        />
        <label htmlFor="password">Password</label>
        <input
          type="text"
          id="password"
          data-testid="password-input"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <button type="button" onClick={handleClick}>
          Sign in
        </button>

    </div>
  );
}
