import React, { useEffect, useState } from "react";
import axios from "axios";
import { isEmpty } from "lodash";
import { useNavigate } from "react-router-dom";

import PolicySection from "../../Components/PolicySection";
import Button from "../../Components/Button";
import TextFormatter from "../../utils/text-formatter";
import styles from "./Policy.module.css";
import Header from "../../Components/Header";

export default function Policy() {
  const [policy, setPolicy] = useState({});
  const tf = new TextFormatter(policy);
  const navigate = useNavigate();

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

  const signOutHandler = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <>
      {isEmpty(policy) ? (
        <p>Loading...</p>
      ) : (
        <>
          <div className={styles["policy-container"]}>
            <Header text="My Policy" />
            <section className={styles["policy-section"]}>
              <div className={styles["policy-box-1"]}>
                <div className={styles["policy-box-2"]}>
                  <h3 className={styles['section-header']}>Policy details</h3>
                  <PolicySection
                    label={"Policy reference"}
                    text={tf.formatPolicyRef()}
                  />
                  <PolicySection
                    label={"Cover type"}
                    text={tf.formatCoverType()}
                  />
                </div>
                <div className={styles["vehicle-box"]}>
                  <h3 className={styles['section-header']}>Vehicle details</h3>
                  <PolicySection label={"Car"} text={tf.formatCar()} />
                </div>
                <div className={styles["proposer-box"]}>
                  <h3 className={styles['section-header']}>Proposer details</h3>
                  <PolicySection label={"Name"} text={tf.formatName()} />
                  <PolicySection label={"Address"} text={tf.formatAddress()} />
                </div>
                <div className={styles['btn-container']}>
                  <Button colour='light' text='Sign out' onClick={signOutHandler}/>
                </div>
              </div>
            </section>
          </div>
        </>
      )}
    </>
  );
}
