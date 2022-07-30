import React, { useEffect, useState } from "react";
import axios from "axios";
import { isEmpty } from "lodash";

import PolicySection from "../../Components/PolicySection";
import Button from "../../Components/Button";
import {
  formatPolicyRef,
  formatCoverType,
  formatCar,
  formatName,
  formatAddress,
} from "../../utils/formatText";

export default function Policy() {
  const [policy, setPolicy] = useState({});

  useEffect(() => {
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
        setPolicy(response.data);
      } catch (error) {}
    };

    getAPIData();
  }, []);

  return (
    <>
      {isEmpty(policy) ? (
        <p>Loading...</p>
      ) : (
        <>
          <h2>My Policy</h2>
          <PolicySection
            label={"Policy reference"}
            text={formatPolicyRef(policy)}
          />
          <PolicySection label={"Cover type"} text={formatCoverType(policy)} />
          <PolicySection label={"Car"} text={formatCar(policy)} />
          <PolicySection label={"Name"} text={formatName(policy)} />
          <PolicySection label={"Address"} text={formatAddress(policy)}/>
          <Button text={"Sign out"} />
        </>
      )}
    </>
  );
}
