import React, { useEffect, useState } from "react";
import axios from "axios";
import { isEmpty } from "lodash";

import PolicySection from "../../Components/PolicySection";
import Button from "../../Components/Button";
import { formatPolicyRef } from "../../utils/formatText";

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
        setPolicy(response.data.policy);
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
          <PolicySection label={"Cover type"} />
          <PolicySection label={"Car"} />
          <PolicySection label={"Name"} />
          <PolicySection label={"Address"} />
          <Button text={"Sign out"} />
        </>
      )}
    </>
  );
}
