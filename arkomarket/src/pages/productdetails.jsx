import React from "react";
import { Container, Nav } from "react-bootstrap";
import Footer from "../component/footer";
import NavBar from "../component/nav";
import "../css/productdetails.css";
import "../scss/productdetails.scss";
import share from "../Asset/share.svg";
import heart from "../Asset/heart.svg";
import whatsapp from "../Asset/whatsapp.svg";
import viber from "../Asset/viber.svg";
import location from "../Asset/location.svg"
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
            <div className="details-product border">
              <div className="m-4">
                <div className="addedon-time-share-btn">
                  <div className="time-add-product mt-3">
                    <p>Added on Mar 21, 2022</p>
                    <p>Views : 23,498</p>
                  </div>
                  <div className="share-btn-product ">
                    <Nav.Link>
                      <img src={share} alt="" />
                    </Nav.Link>
                    <Nav.Link>
                      <img src={heart} alt="" />
                    </Nav.Link>
                  </div>
                </div>
                <div className="title-price mt-4">
                  <div className="title">
                    <h2>Lorem ipsum dolor sit amet, consectetur </h2>
                  </div>
                  <div className="price mb-4 mt-3">
                    <h3> Rs.1,400/- </h3>
                    <button className="freeadsbtn quality">Used/Perfect</button>
                  </div>
                </div>
                <div className="details-sec mt-3 ">
                  <h2 className="mb-2">Details</h2>
                  <div className="key-value-data mb-3">
                    <div className="owner">
                      <div className="owner-title">Owner:</div>
                      <div className="owner-name">Allen dev</div>
                    </div>
                    <div className="owner">
                      <div className="owner-title">SubCategory: </div>
                      <div className="owner-name">Allen dev</div>
                    </div>
                    <div className="owner">
                      <div className="owner-title">Condition: </div>
                      <div className="owner-name">Allen dev</div>
                    </div>
                    <div className="owner">
                      <div className="owner-title">Guarantee: </div>
                      <div className="owner-name">Allen dev</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="des-comment-sec border">
              <div className="header-comment-des p-4 ">
                <Nav.Link href="#"> Description</Nav.Link>
                <Nav.Link href="#">Comment </Nav.Link>
              </div>
              <div className="des-and-comment-sec m-4">
                <text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Tellus pellentesque nam dignissim amet, accumsan vitae
                  sollicitudin lectus. Lacus, nulla semper dignissim non sit fus
                  ce faucibus adipiscing in. Ullamcorper scelerisque eleifend
                  etiam elementum nunc nulla augue volutpat. Placerat quam
                  dignissim nullam quis dictum dignissim nunc purus. In velit,
                  sapien cursus in arcu. Mi id sed mauris potenti aliquam sed
                  mauris a. Posuere consequat sed mollis vestibulum. Morbi nunc,
                  sagittis euismod pellentesque. Dui at turpis pretium molestie
                  hendrerit. Risus, est ultrices dolor suspendisse placerat
                  convallis enim. In scelerisque mi vulputate vitae nulla
                  mauris. Posuere sapien neque, sagittis facilisis a.
                </text>
              </div>
            </div>
          </div>
          <div className="user-map-sec">
            <div className="user-details-sec ">
              <div className="seller-details px-1 pt-3">
                <text>Seller details</text>
                <div className="seller-profile-brief">
                  <div className="user-img mt-4">
                    <img
                      src="https://dragonball.guru/wp-content/uploads/2021/01/goku-dragon-ball-guru.jpg"
                      alt=".user"
                    />
                  </div>

                  <div className="profile-brief">
                    <h4>Aabid</h4>
                    <text className="member-since">Member since May 2021</text>
                    <text className="last-active ">
                      <div className="dot"></div>
                      Active 34m ago
                    </text>
                  </div>
                </div>
                <div className="call-seller-btn">
                  <button className="freeadsbtn call-seller-green-btn">
                    Call Seller
                  </button>

                  <a href="#">
                    <img src={whatsapp} alt=".whatsapp" />
                  </a>
                  <a href="#">
                    <img src={viber} alt=".viber" />
                  </a>
                </div>
                <div className="view-seller-ads-link">
                  <Nav.Link>view seller all ads (0)</Nav.Link>
                </div>
              </div>
            </div>
            <div className="loc-map-sec ">
              <div className="location-text">
                <h4>Location</h4>
                <div className="location-details-text">
                <img src={location} alt=".location" />
                <text>Setopull, Kathmandu, NP</text>
                </div>
               
              </div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.43915461777!2d85.33363151522076!3d27.703724082793478!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19008861ae05%3A0x4ddd56d922a1cf9f!2sAlwazebrand!5e0!3m2!1sen!2snp!4v1652757324809!5m2!1sen!2snp"
                width={279}
                height={108}
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className=" mt-3"
              />
            </div>
          </div>
        </div>
      
      </Container>
      <Container>
      <div className="similar-Ads">
            <div className="see-more-btn">
                <button>view more</button>
            </div>
        </div>
      </Container>
      <Footer />
    </>
  );
};

export default Productdetails;
