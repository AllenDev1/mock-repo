import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import BlogNav from "./BlogNav";
import { useState, useEffect } from "react";
import axios from "axios";

const BlogArticle = () => {
	const [blogs, setBlogs] = useState();
	useEffect(() => {
		fetchBlogData();
	}, []);

	const fetchBlogData = () => {
		const options = {
			method: "GET",
			url: "/blog/",
		};

		axios
			.request(options)
			.then(function (response) {
				setBlogs(response.data);
			})
			.catch(function (error) {
				console.error(error);
			});
	};


	return (
		<>
			<BlogNav />
			<Container className="blog-article-conrainer">
				<Row className="blog-article-row">
					<Col className="blog-article-col" xs={9}>
						<div className="blog-card-link">hello</div>
					</Col>
					<Col className="advertisement-article-col"></Col>
				</Row>
			</Container>
		</>
	);
};

export default BlogArticle;
