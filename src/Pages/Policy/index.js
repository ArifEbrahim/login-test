import React, { useEffect, useState } from "react";
import axios from "axios";
import { isEmpty } from "lodash";

import PolicySection from "../../Components/PolicySection";
import Button from "../../Components/Button";
import TextFormatter from "../../utils/text-formatter";

export default function Policy() {
  const [policy, setPolicy] = useState({});
  const tf = new TextFormatter(policy);

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
            text={tf.formatPolicyRef()}
          />
          <PolicySection label={"Cover type"} text={tf.formatCoverType()} />
          <PolicySection label={"Car"} text={tf.formatCar()} />
          <PolicySection label={"Name"} text={tf.formatName()} />
          <PolicySection label={"Address"} text={tf.formatAddress()}/>
          <Button text={"Sign out"} />
        </>
      )}
    </>
  );
}
