import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
import "../scss/sidebar.scss";
const Sidebar = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  return (
    <>
      <div className="main-sec-user-profile">
        <Container className="mt-5">
          <div className="sidebar">
            <div className="sidebarWrapper">
              <div className="sidebarMenu">
                <ul className="sidebarList">
                  <Link
                    to="editprofile/?active-nav=editprofile"
                    className={
                      "link" +
                      (searchParams.get("active-nav") === "editprofile"
                        ? " active-nav"
                        : "")
                    }
                  >
                    Edit Profile
                  </Link>
                  <Link
                    to="appformessage/?active-nav=appformessage"
                    className={
                      "link" +
                      (searchParams.get("active-nav") === "appformessage"
                        ? " active-nav"
                        : "")
                    }
                  >
                    Link App for Messages
                  </Link>
                  <Link
                    to="user-notification/?active-nav=user-notification"
                    className={
                      "link" +
                      (searchParams.get("active-nav") === "user-notification"
                        ? " active-nav"
                        : "")
                    }
                  >
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
