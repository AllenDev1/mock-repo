import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import "./Blog-Scss/blogfilter.scss";
const BlogFilter = () => {
	return (
		<>
			<Container className="blog-filter-cont">
				<Row className="blog-filter-row">
					<Col className="blog-filter-col">
						<Button>All</Button>
						<Button>Buyer Guide</Button>
						<Button>Properties</Button>
						<Button>Car</Button>
						<Button>Bike</Button>
						<Button>Laptop</Button>
						<Button>Mobile</Button>
						<Button>Seller Guide</Button>
						<Button>TV</Button>
						<Button>Gadgets</Button>
						
					</Col>
				</Row>
			</Container>
		</>
	);
};

export default BlogFilter;
