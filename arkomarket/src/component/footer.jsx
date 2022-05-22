import React from "react";
import { Container, Nav } from "react-bootstrap";
import logo from "../Asset/footerImage.svg";
import banner from "../Asset/banner 1.svg";
import "../css/footer.css";
import twitter from "../Asset/twitter.svg";
import facebook from "../Asset/facebook.svg";
import insta from "../Asset/insta.svg";
import playStore from "../Asset/play store 1.svg";
import appStore from "../Asset/app store 1.svg";

const Footer = () => {
  return (
    <>
      <img src={banner} alt=".banner " style={{ width: "100vw" }} />
    <footer>
        <Container className="footer-container" >
          <div href="/" className="logo">
            <img
              src={logo}
              alt=".logo"
              className="align-middle"
              style={{ color: "red" }}
            />
          </div>
          <div className="footer-links1">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="#">Contact Us</Nav.Link>
            <Nav.Link href="#">Feedback & Help</Nav.Link>
            <Nav.Link href="#">Terms & Conditions</Nav.Link>
            <Nav.Link href="#">Privacy</Nav.Link>
          </div>
          <div className="footer-link2">
            <Nav.Link href="#">Login</Nav.Link>
            <Nav.Link href="#">Register</Nav.Link>
            <Nav.Link href="#">Fotgot Your Password</Nav.Link>
            <Nav.Link href="#">FAQs</Nav.Link>
          </div>
          <div className="find-us-on">
            <p>Find us on</p>
            <div className="iconsSocailMedia">
              <a href="#">
                <img src={twitter} alt=".twitter" />
              </a>
              <a href="#">
                <img src={insta} alt=".insta" />
              </a>
              <a href="#">
                <img src={facebook} alt=".facebook" />
              </a>
            </div>
          </div>
        </Container>
        <Container className="below-footer">
          <div className="Below-footer-items-right">
            <p>Copyright 2021 | ArkoMarket</p>
          </div>
          <div className="Below-footer-items-right">
            <p>Available on</p>
            <a href="#">
              <img src={playStore} alt=".Google play" />
            </a>
            <a href="#">
              <img src={appStore} alt=".App store" />
            </a>
          </div>
        </Container>
        </footer>
    </>
  );
};

export default Footer;
