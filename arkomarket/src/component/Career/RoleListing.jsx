import React from "react";
import { Button, Container, Modal, Form } from "react-bootstrap";
import "./career scss/openroles.scss";
import Stack from "react-bootstrap/Stack";

const RoleListing = () => {
	const [modalShow, setModalShow] = React.useState(false);
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
								<Button onClick={() => setModalShow(true)}>
									Apply Now
								</Button>
							</div>
							<Applyforjobform
								show={modalShow}
								onHide={() => setModalShow(false)}
							/>
						</div>
					</Stack>
				</div>
			</Container>
		</>
	);
};

export default RoleListing;

function Applyforjobform(props) {
	return (
		<Modal
			{...props}
			size="lg"
			aria-labelledby="contained-modal-title-vcenter"
			centered
		>
			<Modal.Header closeButton>
				<Modal.Title id="contained-modal-title-vcenter">
					You are applying to
					<br /> ArkoMarket
				</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<Form>
					

					<Form.Group className="mb-3" controlId="formBasicPassword">
						<Form.Label>First Name</Form.Label>
						<Form.Control type="password" placeholder="First Name" />
					</Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
						<Form.Label>Last Name</Form.Label>
						<Form.Control type="password" placeholder="Last Name" />
					</Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
						<Form.Label>Mobile Number</Form.Label>
						<Form.Control type="email" placeholder="Mobile Number" />
					</Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
						<Form.Label>Email</Form.Label>
						<Form.Control type="password" placeholder="Email" />
					</Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
						<Form.Label>Linked Profile </Form.Label>
						<Form.Control type="email" placeholder="Linked Profile " />
					</Form.Group>
				</Form>
			</Modal.Body>
			<Modal.Footer>
				<Button onClick={props.onHide}>Submit Application</Button>
			</Modal.Footer>
		</Modal>
	);
}
