import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import Input from "../../Components/Input";
import Button from "../../Components/Button";
import styles from "./Login.module.css";
import Header from "../../Components/Header";

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

  const submitHandler = async (event) => {
    event.preventDefault();

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
      <Header text="Sign In" />
      <main className={styles["form-container-1"]}>
        <form onSubmit={submitHandler}>
          <div className={styles["form-container-2"]}>
            <Input
              onChange={setUsername}
              value={username}
              label="Username"
              id="username"
            />
            <Input
              onChange={setPassword}
              value={password}
              label="Password"
              id="password"
              type="password"
            />
            <div className={styles["btn-container"]}>
              <Button colour='dark' text="Sign in" type="submit"/>
            </div>
          </div>
        </form>
      </main>
    </div>
  );
}
