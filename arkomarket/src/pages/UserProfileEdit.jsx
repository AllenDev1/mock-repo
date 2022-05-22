import React from "react";
import Sidebar from "../component/sidebar";
import { Outlet } from "react-router-dom";
import { Container } from "react-bootstrap";
import UserNav from "../component/user-nav";
import "../scss/userprofile.scss";
const UserProfileEdit = () => {
  return (
    <>
    <UserNav/>
      <Container>
        <div className="user-sec-main">
          <Sidebar />
          <Outlet />
        </div>
      </Container>
    </>
  );
};

export default UserProfileEdit;
