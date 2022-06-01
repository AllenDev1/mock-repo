import React from "react";
import "../scss/profiledetails.scss";
import Profile from "../Asset/profile.svg";
import Feed from "../Asset/feed.svg";
import Install from "../Asset/install.svg";
import Logout from "../Asset/logout.svg";
import Setting from "../Asset/setting.svg";
import {NavLink} from "react-bootstrap";

const Profiledetails = () => {

  return (
    <div className="profile-cont">
      <div className="profile-list">
        <NavLink to="#">
          <div className="profile-heads">
            <img className="profile-pad" src={Profile} />
            <h5>My Profile</h5>
          </div>
        </NavLink>
        <NavLink to="#">
          <div className="profile-heads">
            <img src={Setting} />
            <h5>Setting</h5>
          </div>
        </NavLink>

        <NavLink to="#">
          <div className="profile-heads">
            <img src={Feed} />
            <h5>Feedback and Help</h5>
          </div>
        </NavLink>
        <NavLink to="#">
          <div className="profile-heads">
            <img src={Install} />
            <h5>Install App</h5>
          </div>
        </NavLink>
        <NavLink to="#">
          <div className="profile-heads-logout">
            <img src={Logout} />
            <h5>Logout</h5>
          </div>
        </NavLink>
      </div>
    </div>
  );
};

export default Profiledetails;
