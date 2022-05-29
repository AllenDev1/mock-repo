import React from "react";
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
const Querieslink = () => {
  return (
    <>
      <div className="help-nav-center">
        <Helpnav />
      </div>
      <Helpbody />
      <Container className="help-landing-page">
        <div className="main-link-head">
          <Tabs
            defaultActiveKey="Buyer FAQs"
            id="uncontrolled-tab-example"
            className="mb-3"
          >
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
      </Container>
    </>
  );
};

export default Querieslink;
