import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import Input from "../../Components/Input";
import Button from "../../Components/Button";
import styles from "./Login.module.css";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
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
      navigate("/policy");
    } catch (error) {}
  };

  return (
    <div className={styles["login-container"]}>
      <header className={styles["login-header"]}>
        <h2>Sign In</h2>
      </header>
      <main className={styles["form-container-1"]}>
        <form>
          <div className={styles["form-container-2"]}>
            <Input
              onChange={setUsername}
              value={username}
              label="Username"
              id="username"
              type="text"
            />
            <Input
              onChange={setPassword}
              value={password}
              label="Password"
              id="password"
              type="password"
            />
            <div className={styles["btn-container"]}>
              <Button text="Sign in" onClick={handleClick} />
            </div>
          </div>
        </form>
      </main>
    </div>
  );
}
