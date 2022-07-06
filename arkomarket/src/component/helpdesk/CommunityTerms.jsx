import React, { useState, useEffect } from "react";
import "../../scss/queriesnav.scss";
import Accordion from "react-bootstrap/Accordion";
import insta from "../../Asset/029-instagram 1.svg";
import twitter from "../../Asset/twitter-color-less.svg";
import facebookicon from "../../Asset/036-facebook 1.svg";
import axios from "axios";

const CommunityTermsItem = ({ title, description, type }) => {
  return (
    <>
      <div className="privacy-sec">
        <h5>{title}</h5>
        <p>{description}</p>
      </div>
    </>
  );
};
const CommunityTerms = () => {
  const [communityTerms, setCommunityTerms] = useState();

  useEffect(() => {
    importingCommunityTerms();
  }, []);

  const importingCommunityTerms = () => {
    const options = {
      method: "GET",
      url: "/terms/",
    };

    axios
      .request(options)
      .then(function (response) {
        setCommunityTerms(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  };
  return (
    <>
      <div className="var-queries">
        {communityTerms?.map((item, index, error) => {
          if (item.type === "COMMUNITY_TERMS") {
            return (
              <>
                <CommunityTermsItem
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

export default CommunityTerms;
