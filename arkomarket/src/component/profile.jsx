import React from "react";
import "../css/profile.css";
import "../scss/profile.scss";
import eye from "../Asset/eye.svg";
import share from "../Asset/share.svg";
import edit from "../Asset/Edit.svg";
import myads from "../Asset/ads.svg";
import heart from "../Asset/heart.svg";
import { Container, Nav } from "react-bootstrap";
import UserNav from "./user-nav";
import "../scss/style.scss"
function Profile() {
  return (
    <>
      <UserNav />
      <Container>
        <div className="Main-profile mb-5">
          <div className="profile-container">
            <div className="profile-image">
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
                <a href="user-profile-edit">
                  <div className="profile-edit">
                    <img src={edit} />
                    <p>Edit Profile</p>
                  </div>
                </a>
                <div className="profile-share">
                  <img src={share} />
                </div>
              </div>
            </div>
            <div className="profile-discription">
              <p>New Academy for New Generation in Nepal. Learn any courses.</p>
            </div>
          </div>
          <div class="title-c">
            <div className="Ads-title">
              <Nav.Link>
                <div className="user-ads">
                  <img src={myads} />
                  My Ads
                </div>
              </Nav.Link>
              <Nav.Link>
                <div className="saved-ads">
                  <img src={heart} />
                  Saved Ads
                </div>
              </Nav.Link>
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

export default Profile;
