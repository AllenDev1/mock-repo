import React, { useEffect, useState } from "react";
import axios from "axios";
import "../../scss/queriesnav.scss";
import Accordion from "react-bootstrap/Accordion";
import insta from "../../Asset/029-instagram 1.svg";
import twitter from "../../Asset/twitter-color-less.svg";
import facebookicon from "../../Asset/036-facebook 1.svg";

const AccordionItem = ({ question, answer, index }) => {
  return (
    <>
      <Accordion.Item eventKey={index}>
        <Accordion.Header>{question}</Accordion.Header>
        <Accordion.Body>
          {answer}
          <div className="was-this-helpful">
            <div className="question">
              <p>Was this articles helpful ?</p>
              <div className="yes-no-button">
                <button>Yes</button>
                <button>No</button>
              </div>
            </div>
            <div className="share-on">
              <p>Share on:</p>
              <div className="link-box-icon">
                <a href="http://">
                  <img src={twitter} alt=".FB" srcset="" />
                </a>
                <a href="http://">
                  <img src={insta} alt=".FB" srcset="" />
                </a>
                <a href="http://">
                  <img src={facebookicon} alt=".FB" srcset="" />
                </a>
              </div>
            </div>
          </div>
        </Accordion.Body>
      </Accordion.Item>
    </>
  );
};
const SellerFAQS = () => {
  const [qusans, setQusans] = useState();

  useEffect(() => {
    publishQusAns();
  }, []);

  const publishQusAns = () => {
    const options = { method: "GET", url: "/faqs/" };

    axios
      .request(options)
      .then(function (response) {
        setQusans(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  };
  return (
    <>
      <div className="var-queries">
        <Accordion defaultActiveKey="0" alwaysOpen={false}>
          {qusans?.map((item, index) => {
            if (item.type === "SELLER")
              return (
                <AccordionItem
                  question={item.question}
                  answer={item.answer}
                  index={index}
                  key={index}
                />
              );
          })}
        </Accordion>
      </div>
    </>
  );
};

export default SellerFAQS;
