import React from "react";
import { Button, Modal, Form } from "react-bootstrap";
import "./career scss/applyformmodal.scss";
const ApplyforRole = (props) => {
	const [dragActive, setDragActive] = React.useState(false);
	// ref
	const inputRef = React.useRef(null);

	// handle drag events
	const handleDrag = function (e) {
		e.preventDefault();
		e.stopPropagation();
		if (e.type === "dragenter" || e.type === "dragover") {
			setDragActive(true);
		} else if (e.type === "dragleave") {
			setDragActive(false);
		}
	};
	// triggers when file is dropped
	const handleDrop = function (e) {
		e.preventDefault();
		e.stopPropagation();
		setDragActive(false);
		if (e.dataTransfer.files && e.dataTransfer.files[0]) {
			// handleFiles(e.dataTransfer.files);
		}
	};

	// triggers when file is selected with click
	const handleChange = function (e) {
		e.preventDefault();
		if (e.target.files && e.target.files[0]) {
			// handleFiles(e.target.files);
		}
	};

	// triggers the input when the button is clicked
	const onButtonClick = () => {
		inputRef.current.click();
	};

	return (
		<Modal
			{...props}
			size="lg"
			aria-labelledby="contained-modal-title-vcenter"
			centered
			className="apply-for-role-modal"
		>
			<Modal.Header closeButton>
				<Modal.Title id="contained-modal-title-vcenter">
					You are applying to
					<br /> <h5>ArkoMarket</h5>
				</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<Form>
					<Form.Group
						className="mb-3 label-input-area"
						controlId="formBasicPassword"
					>
						<Form.Label>First Name</Form.Label>
						<Form.Control
							type="password"
							placeholder="First Name"
						/>
					</Form.Group>
					<Form.Group
						className="mb-3 label-input-area"
						controlId="formBasicPassword"
					>
						<Form.Label>Last Name</Form.Label>
						<Form.Control type="password" placeholder="Last Name" />
					</Form.Group>
					<Form.Group
						className="mb-3 label-input-area"
						controlId="formBasicEmail"
					>
						<Form.Label>Mobile Number</Form.Label>
						<Form.Control
							type="email"
							placeholder="Mobile Number"
						/>
					</Form.Group>
					<Form.Group
						className="mb-3 label-input-area"
						controlId="formBasicPassword"
					>
						<Form.Label>Email</Form.Label>
						<Form.Control type="password" placeholder="Email" />
					</Form.Group>
					{/* <input
						ref={inputRef}
						type="file"
						id="input-file-upload"
						multiple={true}
						onChange={handleChange}
					/> */}
					<label
						id="label-file-upload"
						htmlFor="input-file-upload"
						className={dragActive ? "drag-active" : ""}
					>
						<div >
							<p>Upload Resume/CV ( Upload PDF file format )</p>
							<button
								className="upload-button"
								onClick={onButtonClick}
							>
								Drag and Drop or Browse
							</button>
						</div>
					</label>
					{dragActive && (
						<div
							id="drag-file-element"
							onDragEnter={handleDrag}
							onDragLeave={handleDrag}
							onDragOver={handleDrag}
							onDrop={handleDrop}
						></div>
					)}
					<Form.Group
						className="mb-3 label-input-area"
						controlId="formBasicEmail"
					>
						<Form.Label>Linked Profile </Form.Label>
						<Form.Control
							type="email"
							placeholder="Linked Profile "
						/>
					</Form.Group>
				</Form>
			</Modal.Body>
			<Modal.Footer>
				<Button onClick={props.onHide}>Submit Application</Button>
			</Modal.Footer>
		</Modal>
	);
};

export default ApplyforRole;
