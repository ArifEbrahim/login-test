import React, { useEffect, useState } from "react";
import axios from "axios";
import PolicySection from "../../Components/PolicySection";
import Button from "../../Components/Button";

export default function Policy() {
  const [policyRef, setPolicyRef] = useState("");

  const getAPIData = async () => {
    const url = "https://api.bybits.co.uk/policys/details";
    const token = localStorage.getItem("token");
    const config = {
      headers: {
        environment: "mock",
        Authorization: `Bearer ${token}`,
        "Content-type": "application/json",
      },
    };
    try {
      const response = await axios.get(url, config);
      const rawPolicyRef = response.data.policy.policy_reference;
      setPolicyRef(rawPolicyRef);
    } catch (error) {}
  };

  useEffect(() => {
    getAPIData();
  }, []);

  return (
    <>
      <h2>My Policy</h2>
      <PolicySection label={"Policy reference"} text={policyRef} />
      <PolicySection label={"Cover type"} />
      <PolicySection label={"Car"} />
      <PolicySection label={"Name"} />
      <PolicySection label={"Address"} />
      <Button text={"Sign out"} />
    </>
  );
}
