import React from "react";
import { Container } from "react-bootstrap";
import "../scss/queriesnav.scss";

const Queriesnav = () => {
  return (
    <>
      <div className="var-queries">
        <div className="queries-section">
          <p>What does verified user mean?</p>
        </div>
        <div className="queries-section">
          <p>Why should I trust a verified user/seller?</p>
        </div>
        <div className="queries-section">
          <p>How do I search for a product?</p>
        </div>
        <div className="queries-section">
          <p>How can I contact a Seller?</p>
        </div>
        <div className="queries-section">
          <p>Points to remember while checking a product?</p>
        </div>
        <div className="queries-section">
          <p>Can I pay advance to seller?</p>
        </div>
        <div className="queries-section">
          <p>Where should I meet the seller?</p>
        </div>
        <div className="queries-section">
          <p>How can I find Ads that I have seen before?</p>
        </div>
        <div className="queries-section">
          <p>How can I find Ads that I have seen before?</p>
        </div>
        <div className="write-section">
          <p>Can't find what you're looking for?</p>
          <div className="what-is">
            <p>write to us</p>
            <div />
          </div>
        </div>
      </div>
    </>
  );
};

export default Queriesnav;
