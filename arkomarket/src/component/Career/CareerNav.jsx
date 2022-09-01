import React from "react";
import { Button, Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import careerlogo from "./careerlogo.svg";
import "./career scss/careernav.scss"
const CareerNav = () => {
	return (
		<>
			<div className="career-nav-div">
				<Container className="career-container">
					<Row className="career-nav">
						<Col className="career-logo">
							<img src={careerlogo} alt=".logo" />
						</Col>
						<Col className="contact-btn">
							<a href="/contact" > Contact</a> 
						</Col>
					</Row>
				</Container>
			</div>
		</>
	);
};

export default CareerNav;
