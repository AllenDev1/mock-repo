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
import { NavLink } from "react-bootstrap";
import MediaQuery from "react-responsive";
import "../scss/responsive scss/v2footer.scss";
const Footer = () => {
  return (
    <>
      <MediaQuery minWidth={800}>
        <img src={banner} alt=".banner " style={{ width: "100%" }} />
        <footer>
          <Container className="footer-container">
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
              <Nav.Link href="#">Advirtise</Nav.Link>
            </div>
            <div className="footer-link2">
              <Nav.Link href="/">Buyer FAQ</Nav.Link>
              <Nav.Link href="#">Seller FAQ</Nav.Link>
              <Nav.Link href="/career">Career</Nav.Link>
              <Nav.Link href="/blog">Blog</Nav.Link>
            </div>
            <div className="footer-links3">
              <NavLink href="/helpdesk">Feedback & Help</NavLink>
              <Nav.Link href="#">Trust & Saftey</Nav.Link>
              <Nav.Link href="#">Community Terms</Nav.Link>
              <Nav.Link href="#">Privacy</Nav.Link>
              <Nav.Link href="#">Terms of use</Nav.Link>
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
      </MediaQuery>
      {/* /// mobile view */}
      <MediaQuery maxWidth={993}>
        <img src={banner} alt=".banner " style={{ width: "100%" }} />
        <footer>
          <div href="/" className="logo">
            <img src={logo} alt=".logo" className="align-middle" />
          </div>
          <Container className="footer-container">
            <div className="footer-links1">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="#">Contact Us</Nav.Link>
              <Nav.Link href="#">About</Nav.Link>
            </div>
            <div className="footer-link2">
              <Nav.Link href="/">Buyer FAQ</Nav.Link>
              <Nav.Link href="#">Seller FAQ</Nav.Link>
              <Nav.Link href="#">Career</Nav.Link>
              <Nav.Link href="#">
                Newsroom <p>(Coming soon) </p>
              </Nav.Link>
            </div>
          </Container>
          <div className="botter-bottom-line"></div>
          <Container className="footer-container">
            <div className="footer-links3">
              <NavLink href="/helpdesk">Feedback & Help</NavLink>
              <Nav.Link href="#">Trust & Saftey</Nav.Link>
              <Nav.Link href="#">Community Terms</Nav.Link>
              <Nav.Link href="#">Privacy</Nav.Link>
              <Nav.Link href="#">Terms of use</Nav.Link>
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
            <div className="Below-footer-items-right Available-on">
              <p>Available on</p>
              <div className="links-for-app">
                <a href="#">
                  <img src={playStore} alt=".Google play" />
                </a>
                <a href="#">
                  <img src={appStore} alt=".App store" />
                </a>
              </div>
            </div>
          </Container>
        </footer>
      </MediaQuery>
    </>
  );
};

export default Footer;
