import React, { useState } from "react";
import { Container } from "react-bootstrap";
import Queriesnav from "./helpdesk/queriesnav";
import "../scss/querieslink.scss";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Helpnav from "./Helpnavbar";
import Helpbody from "./helpbody";
import SellerFAQS from "./helpdesk/SellerFAQS";
import GeneralQuaries from "./helpdesk/GeneralQuaries";
import TrustSafety from "./helpdesk/Trust-Safety";
import Privacy from "./helpdesk/Privacy";
import TermsOfUse from "./helpdesk/Terms-of-use";
import CommunityTerms from "./helpdesk/CommunityTerms";
import Modal from "react-bootstrap/Modal";

import Logo from "../Asset/Arko-help.svg";
import Helpform from "./helpform";
const Querieslink = () => {
  window.addEventListener("scroll", () => {
    if (window.scrollY > 240) {
      document.querySelector(".apple").style.position = "fixed";
      document.querySelector(".apple").style.top = "70px";
      document.querySelector(".main-link-head").style.display = "block";
    } else {
      document.querySelector(".apple").style.position = "relative";
      document.querySelector(".apple").style.top = "0px";
      document.querySelector(".main-link-head").style.display = "flex";
    }
  });
  function MyVerticallyCenteredModal(props) {
    return (
      <Modal {...props} aria-labelledby="contained-modal-title-center" centered>
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-center">
            <div className="top-help">
              <img className="Logo" src={Logo} />
            </div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Helpform />
        </Modal.Body>
      </Modal>
    );
  }
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <div className="help-nav-center">
        <Helpnav />
      </div>
      <Helpbody />
      <Container className="help-landing-page">
        <div className="main-link-head">
          <Tabs defaultActiveKey="Buyer FAQs" className="mb-3 apple">
            <Tab eventKey="Buyer FAQs" title="Buyer FAQs">
              <Queriesnav />
            </Tab>
            <Tab eventKey="Sellers FAQs" title="Sellers FAQs">
              <SellerFAQS />
            </Tab>
            <Tab eventKey="General Queries" title="General Queries">
              <GeneralQuaries />
            </Tab>
            <Tab eventKey="TrustSafety" title="Trust & Safety">
              <TrustSafety />
            </Tab>

            <Tab eventKey="Privacy" title="Privacy">
              <Privacy />
            </Tab>
            <Tab eventKey="Terms of use" title="Terms of use">
              <TermsOfUse />
            </Tab>
            <Tab eventKey="Community Terms" title="Community Terms">
              <CommunityTerms />
            </Tab>
          </Tabs>
        </div>
        <div className="write-to-us">
          <div className="cant-find">Can't find what you're looking for?</div>
          <button onClick={() => setModalShow(true)}>write to us</button>
        </div>

        <MyVerticallyCenteredModal
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      </Container>
    </>
  );
};

export default Querieslink;
