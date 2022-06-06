import React from "react";
import "../css/profile.css";
import "../scss/profile.scss";
import eye from "../Asset/eye.svg";
import share from "../Asset/share.svg";
import { Container, Nav } from "react-bootstrap";
import UserNav from "./user-nav";

function SellerProfile() {
  return (
    <>
      <UserNav />
      <Container>
        <div className="Main-profile mb-5">
          <div className="profile-container">
            <div className="profile-head">
              <h5>Seller Profile</h5>
              <img src={share} />
            </div>

            <div className="profile-img">
              <img className="pp" src="https://picsum.photos/200/300" />

              <div className="profile-box">
                <div className="profile">
                  <div className="Mem-name">
                    <p>Leslie Alexander</p>
                  </div>
                  <div className="mem-time">
                    <p>Member since May 2021</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="card">
              <img
                src="https://picsum.photos/200/300"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <div class="card-title">
                  <h5>The Codes and Conventions of TV Serial Dramas</h5>
                </div>
                <div class="lower-text">
                  <div class="card-price">
                    <p> Rs.13,000</p>
                  </div>
                  <div class="card-space">
                    <div class="card-age">
                      <p>Brand New</p>
                    </div>
                    <div class="card-seen">
                      <img src={eye} alt=".seen" />
                      <p>20000000</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="card">
              <img
                src="https://picsum.photos/200/300"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <div class="card-title">
                  <h5>The Codes and Conventions of TV Serial Dramas</h5>
                </div>
                <div class="lower-text">
                  <div class="card-price">
                    <p> Rs.13,000</p>
                  </div>
                  <div class="card-space">
                    <div class="card-age">
                      <p>Brand New</p>
                    </div>
                    <div class="card-seen">
                      <img src={eye} alt=".seen" />
                      <p>20000000</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="card">
              <img
                src="https://picsum.photos/200/300"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <div class="card-title">
                  <h5>The Codes and Conventions of TV Serial Dramas</h5>
                </div>
                <div class="lower-text">
                  <div class="card-price">
                    <p> Rs.13,000</p>
                  </div>
                  <div class="card-space">
                    <div class="card-age">
                      <p>Brand New</p>
                    </div>
                    <div class="card-seen">
                      <img src={eye} alt=".seen" />
                      <p>20000000</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}

export default SellerProfile;
