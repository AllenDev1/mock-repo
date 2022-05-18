import React from "react";
import Sidebar from "../component/sidebar";
import { Outlet } from "react-router-dom";
import { Container } from "react-bootstrap";
import Editprofile from "../component/editprofile";
const UserProfileEdit = () => {
  return (
    <>
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