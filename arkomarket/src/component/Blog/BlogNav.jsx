import React from "react";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import bloglogo from "../../Asset/bloglogo.svg";
import "./Blog-Scss/blog.scss";
const BlogNav = () => {
	return (
		<>
			<div className="blog-nav-div">
				<Container className="blog-container">
					<Row className="blog-nav">
						<Col className="blog-logo">
							<img src={bloglogo} alt=".logo" />
						</Col>
						<Col className="search-bar">
							<Form className="search-bar-form">
								<Form.Control
									className="search-blog-post"
									placeholder="Explore with keywords"
								/>
							</Form>
						</Col>
					</Row>
				</Container>
			</div>
		</>
	);
};

export default BlogNav;
