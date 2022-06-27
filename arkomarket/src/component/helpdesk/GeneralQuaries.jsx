import React, { useEffect } from "react";
import "../../scss/queriesnav.scss";
import Accordion from "react-bootstrap/Accordion";
import insta from "../../Asset/029-instagram 1.svg";
import twitter from "../../Asset/twitter-color-less.svg";
import facebookicon from "../../Asset/036-facebook 1.svg";
import axios from "axios";
import { useState } from "react";

const GeneralQuaries = () => {
  const [qusans, setQusans] = useState();
  const AccordionItem = ({ question, answer }) => {
    return (
      <>
        <Accordion.Item eventKey="0">
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
  const renderAccordion = (qusans) => {
    return <AccordionItem question={qusans.question} answer={qusans.answer} />;
  };
  useEffect(() => {
    PublishQusAns();
  }, []);
  const PublishQusAns = () => {
    const options = { method: "GET", url: "/faqs/" };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        setQusans(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  };
  return (
    <>
      <div className="var-queries">
        <Accordion defaultActiveKey="0">{renderAccordion}</Accordion>
      </div>
    </>
  );
};

export default GeneralQuaries;
