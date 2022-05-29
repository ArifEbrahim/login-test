import React, { useEffect } from "react";
import axios from "axios";
import PolicySection from "../../Components/PolicySection";
import Button from "../../Components/Button";

export default function Policy() {
  useEffect(() => {
    axios.get();
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
