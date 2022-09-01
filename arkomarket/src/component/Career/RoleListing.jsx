import React from "react";
import { Button, Container } from "react-bootstrap";
import "./career scss/openroles.scss";
import Stack from "react-bootstrap/Stack";

const RoleListing = () => {
	return (
		<>
			<Container className="open-roles-container">
				<div className="open-roles">
					<p>Open Role (4)</p>
				</div>

				<div className="list-roles">
					<Stack className="roles-stack" gap={4}>
						<div className="roles-decs">
							<div className="role-dec-left">
								<div className="role-heading">
									Python, Django Developer
								</div>
								<div className="small-desc-roles">
									<p>Mid-Senior</p>
									<p>Kathmandu, Nepal</p>
									<p>No. of Hiring 3</p>
								</div>
							</div>
							<div className="apply-now-roles">
								<Button>Apply Now</Button>
							</div>
						</div>
                        <div className="roles-decs">
							<div className="role-dec-left">
								<div className="role-heading">
									Python, Django Developer
								</div>
								<div className="small-desc-roles">
									<p>Mid-Senior</p>
									<p>Kathmandu, Nepal</p>
									<p>No. of Hiring 3</p>
								</div>
							</div>
							<div className="apply-now-roles">
								<Button>Apply Now</Button>
							</div>
						</div>
					</Stack>
				</div>
			</Container>
		</>
	);
};

export default RoleListing;
