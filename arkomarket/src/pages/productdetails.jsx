import React from "react";
import { Container, Nav } from "react-bootstrap";
import Footer from "../component/footer";
import NavBar from "../component/nav";
import "../css/productdetails.css";
import "../scss/productdetails.scss";
import {
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBCarouselElement,
} from "mdb-react-ui-kit";
const Productdetails = () => {
  return (
    <>
      <NavBar />
      <Container className="mt-4">
        <MDBCarousel showControls interval={9999999}>
          <MDBCarouselInner>
            <MDBCarouselItem className="active">
              <MDBCarouselElement
                src="https://i.pinimg.com/originals/0e/27/6b/0e276b5fa0eb38dbe3d88337ef79ee6a.jpg"
                alt="..."
              />
            </MDBCarouselItem>
            <MDBCarouselItem>
              <MDBCarouselElement
                src="https://mdbootstrap.com/img/new/slides/042.webp"
                alt="..."
              />
            </MDBCarouselItem>
            <MDBCarouselItem>
              <MDBCarouselElement
                src="https://mdbootstrap.com/img/new/slides/043.webp"
                alt="..."
              />
            </MDBCarouselItem>
          </MDBCarouselInner>
        </MDBCarousel>
      </Container>
      <Container>
        <div className="des-product-section mt-3 mb-3">
          <div className="details-comments ">
            <div className="details-product border"></div>
            <div className="des-comment-sec border">
                <div className="header-comment-des">
                    <Nav.Link href="#"> Description</Nav.Link>
                    <Nav.Link href="#">Comment </Nav.Link>
                </div>
            </div>
          </div>
          <div className="user-map-sec">
            <div className="user-details-sec border"></div>
            <div className="loc-map-sec border"></div>
          </div>
        </div>
      </Container>
      <Footer />
    </>
  );
};

export default Productdetails;
