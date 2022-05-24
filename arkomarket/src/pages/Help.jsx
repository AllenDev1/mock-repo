import React from "react";
import Helpnavbar from "../component/Helpnavbar";
import Helpbody from "../component/helpbody.jsx";
import Queriesnav from "../component/queriesnav";
import Querieslink from "../component/querieslink";
import { Container } from "react-bootstrap";
import {
  Outlet,
  Route,
  Routes,
  BrowserRouter as Router,
} from "react-router-dom";

const Help = () => {
  return (
    <>
      <div className="help-background">
        <Container>
          <Helpnavbar />
          <Helpbody />
        </Container>
        <div className="sec-change-help-sec">
          <Container>
            <Querieslink />
          </Container>
        </div>
      </div>
    </>
  );
};

export default Help;
