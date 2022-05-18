import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../scss/sidebar.scss";
const Sidebar = () => {
  return (
    <>
      <div className="main-sec-user-profile">
        <Container className="mt-5">
          <div className="sidebar">
            <div className="sidebarWrapper">
              <div className="sidebarMenu">
                <ul className="sidebarList">
                  <Link to="/" className="link">
                    Edit Profile
                  </Link>
                  <Link to="appformessage" className="link">
                    Link App for Messages
                  </Link>
                  <Link to="user-notification" className="link">
                    Notifications
                  </Link>
                  <Link to="#" className="link">
                    Logout from all devices
                  </Link>
                  <Link to="#" className="link">
                    Feedback & Help
                  </Link>
                  <Link to="#" className="link">
                    Log out
                  </Link>
                </ul>
              </div>
            </div>
          </div>
        </Container>
       
       
      </div>
    </>
  );
};

export default Sidebar;
