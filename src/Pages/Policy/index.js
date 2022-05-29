import React, { useEffect } from "react";
import axios from "axios";
import PolicySection from "../../Components/PolicySection";
import Button from "../../Components/Button";

export default function Policy() {
  useEffect(() => {
    const url = 'https://api.bybits.co.uk/policys/details';
    const token = localStorage.getItem('token')
    const config = {
      headers: {
        "environment": "mock",
        "Authorization": `Bearer ${token}`,
        "Content-type": "application/json"
      }
    }
    axios.get(url, config);
  });

  return (
    <>
      <h2>My Policy</h2>
      <PolicySection label={"Policy reference"} />
      <PolicySection label={"Cover type"} />
      <PolicySection label={"Car"} />
      <PolicySection label={"Name"} />
      <PolicySection label={"Address"} />
      <Button text={"Sign out"} />
    </>
  );
}
