import React from "react";
import { Card, Container, Nav } from "react-bootstrap";
import logo from "../Asset/footerImage.svg";
import banner from "../Asset/banner 1.svg";
import "../css/footer.css";

const Footer = () => {
  return (
    <>
      <img src={banner} alt=".banner " />
      <footer>
        <Container className="footer-container mt-5">
          <div href="/" className="logo">
            <img
              src={logo}
              alt=".logo"
              className="align-middle"
              style={{ color: "red" }}
            />
          </div>
          <div className="footer-links1">
          <Nav.Link href="#">Home</Nav.Link>
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
             <p>
                 Find us on
             </p>

         </div>
        </Container>
      </footer>
    </>
  );
};

export default Footer;
