import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import BlogNav from "./BlogNav";
import { useState, useEffect } from "react";
import axios from "axios";
import "./Blog-Scss/blogarticles.scss";
import { useParams, useNavigate } from "react-router-dom";

export const convertToSlug = (text) => {
	return text
		.toLowerCase()
		.replace(/ /g, "-")
		.replace(/[^\w-]+/g, "");
};

const BlogArticle = () => {
	const navigate = useNavigate();
	const { blog_id, blog_title_slug } = useParams();

	const [blogs, setBlogs] = useState();
	const [blogData, setBlogData] = useState();

	useEffect(() => {
		fetchBlogData();
	}, []);

	useEffect(() => {
		if (blogs && blogs.length > 0) {
			filterCurrentBlog();
		}
	}, [blog_id, blog_title_slug, blogs]);

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

	const filterCurrentBlog = () => {
		// filter current blog
		const idMatch = (blog) => {
			return blog.id == blog_id;
		};

		const currentBlog = blogs.filter(idMatch)[0];

		const correctSlug = convertToSlug(currentBlog.title);

		if (blog_title_slug !== correctSlug) {
			navigate(`/blogpost/${blog_id}/${correctSlug}`);
			return;
		}
		setBlogData(currentBlog);
	};

	return (
		<>
			<BlogNav />
			<Container className="blog-article-conrainer">
				<Row className="blog-article-row">
					{blogData ? (
						<BlogPost
							title={blogData.title}
							body={blogData.body}
							blog_image={blogData.blog_image}
							created={blogData.created}
							created_by={blogData.created_by}
							blog_categories={blogData.blog_categories}
						/>
					) : (
						<p>page not found</p>
					)}
					<Col className="advertisement-article-col"></Col>
				</Row>
			</Container>
		</>
	);
};

export default BlogArticle;

const BlogPost = (props) => {
	const { title, body, blog_image, created_by, created, blog_categories } =
		props;

	const renderCategoriesTag = (categotyTag, index) => {
		return <CardLink blog_categories={categotyTag} key={index}></CardLink>;
	};

	return (
		<Col className="blog-article-col" xs={8}>
			<div className="blog-card-link">
				{blog_categories?.map(renderCategoriesTag)}
			</div>
			<h1 className="title-of-the-blog">{title}</h1>
			<p className="blogby-bogleat">
				By {created_by} | {created}
			</p>
			<div className="blog-body">
				<div className="blog-image">
					<img src={blog_image} alt=".blog" />
					<p className="image-caption">Image Caption</p>
				</div>
				<div
					className="blog-texts"
					dangerouslySetInnerHTML={{
						__html: body,
					}}
				></div>
			</div>
			<div className="share-btns-blogs">
				<Button className="blog-share-btn">Share</Button>

				<div className="was-this-helpful-blog">
					<div className="was-this-helpful-text">
						Was this blog helpful ?
					</div>

					<div className="btns-yes-no-blog">
						<Button>Yes</Button>
						<Button>Know</Button>
					</div>
				</div>
			</div>
		</Col>
	);
};
const CardLink = (props) => {
	return <div className="cat-tag">{props.blog_categories}</div>;
};
