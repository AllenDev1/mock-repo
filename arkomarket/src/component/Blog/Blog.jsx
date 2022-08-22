import React from "react";
import BlogNav from "./BlogNav";
import BlogFilter from "./BlogFilter";
import BlogArticleListing from "./BlogArticleListing";
const Blog = () => {
	return (
		<>
			<BlogNav />
			<BlogFilter />
			<BlogArticleListing />
		</>
	);
};

export default Blog;
