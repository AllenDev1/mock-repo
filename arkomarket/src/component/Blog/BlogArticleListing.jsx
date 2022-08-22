import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./Blog-Scss/BlogArticleListing.scss";
import Card from "react-bootstrap/Card";
import Stack from "react-bootstrap/Stack";
import axios from "axios";
import { Link } from "react-router-dom";
const BlogArticleListing = () => {
	const [blogs, setBlogs] = useState();
	const [title, setTtile] = useState("");
	const [body, setBody] = useState("");
	const [blog_image, setBlogImage] = useState("");
	const [created_by, setCreatedBy] = useState("");
	const [created_at, setCteatedAt] = useState("");

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
				console.log(response.data);
				setBlogs(response.data);
			})
			.catch(function (error) {
				console.error(error);
			});
	};

	const blogsRendering = (blog) => {
		return (
			<Cards
				id={blog.id}
				title={blog.title}
				body={blog.body}
				blog_image={blog.blog_image}
				created_by={blog.created_by}
				created_at={blog.created_at}
				blog_category={blog.blog_category}
			></Cards>
		);
	};
	return (
		<>
			<Container className="blog-article-listing-cont">
				<Row className="blog-article-listing-main-row">
					<Col xs={9} className="blog-article-listing-main-col">
						<Row className="blog-article-listing-row">
							<h2>Latest Stories</h2>
							<Stack className="articles-stack" gap={4}>
								{blogs?.map(blogsRendering)}
							</Stack>
						</Row>
						<div className="loadmorearticles">
							<Button>See more</Button>
						</div>
					</Col>
					<Col className="blog-article-advertisment">hello</Col>
				</Row>
			</Container>
		</>
	);
};

export default BlogArticleListing;

const Cards = (props) => {
	const { title, body, blog_image, created_by, created_at, blog_category } =
		props;

	const htmlDecode = (input) => {
		var e = document.createElement("div");
		e.innerHTML = input;
		return e.childNodes.length === 0 ? "" : e.childNodes[0].nodeValue;
	};

	return (
		<>
			<Link to="/blogpost">
				<Card className="blog-cards">
					<Card.Img
						className="blog-card-image"
						variant="top"
						src={blog_image}
					/>
					<Card.Body className="blog-card-body">
						<Card.Body className="blog-card-body-link">
							<Card.Link className="blog-card-link">
								{blog_category}
							</Card.Link>
							<Card.Link className="blog-card-link">
								{blog_category}
							</Card.Link>
						</Card.Body>

						<Card.Title className="blog-card-title ">
							{title}
						</Card.Title>
						<Card.Text
							className="blog-card-dec ellipsis"
							dangerouslySetInnerHTML={{
								__html: body,
							}}
						></Card.Text>
						<Card.Footer className="blog-card-footer">
							By {created_by} | {created_at}
						</Card.Footer>
					</Card.Body>
				</Card>
			</Link>
		</>
	);
};
