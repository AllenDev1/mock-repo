import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./career scss/landingpage.scss";
import group from "./Group365.svg"
const CareerLandingPage = () => {
	return (
		<>
			<div className="top-part-career">
                <img className="career-landing-page-image" src={group} alt="..." />
				<Container className="career-landing-page-contianer">
					<div className="see-open-roles">
						<Button>See Open Roles</Button>
					</div>
				</Container>
			</div>
		</>
	);
};

export default CareerLandingPage;
