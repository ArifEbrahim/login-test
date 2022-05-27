import React, { useState } from "react";
import axios from "axios";
import "./Login.css";

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
      localStorage.setItem("token", response.data.access_token);
    } catch (error) {}
  };

  return (
    <div className="login-container">
      <header className="login-header">
        <h2>Sign In</h2>
      </header>
      <main className="form-container-1">
        <form>
          <div className="form-container-2">
            <label htmlFor="username">Username</label>
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
            <div className="btn-container">
              <button className='btn' type="button" onClick={handleClick}>
                <span className="btn-text">Sign in</span>
              </button>
            </div>
          </div>
        </form>
      </main>
    </div>
  );
}
