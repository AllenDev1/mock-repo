import React, { useState, useEffect } from "react";
import "../../scss/queriesnav.scss";
import Accordion from "react-bootstrap/Accordion";
import insta from "../../Asset/029-instagram 1.svg";
import twitter from "../../Asset/twitter-color-less.svg";
import facebookicon from "../../Asset/036-facebook 1.svg";
import axios from "axios";

const TermsItem = ({ title, description, type }) => {
  return (
    <>
      <div className="privacy-sec">
        <h5>{title}</h5>
        <p>{description}</p>
      </div>
    </>
  );
};
const TermsOfUse = () => {
  const [userTerms, setUserTerms] = useState();

  useEffect(() => {
    importingTerms();
  }, []);

  const importingTerms = () => {
    const options = {
      method: "GET",
      url: "/terms/",
    };

    axios
      .request(options)
      .then(function (response) {
        setUserTerms(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  };
  return (
    <>
      <div className="var-queries">
        {userTerms?.map((item, index, error) => {
          if (item.type === "TERMS") {
            return (
              <>
                <TermsItem
                  title={item.title}
                  description={item.description}
                  key={index}
                />
              </>
            );
          } else {
            console.error(error);
          }
        })}
      </div>
    </>
  );
};

export default TermsOfUse;
