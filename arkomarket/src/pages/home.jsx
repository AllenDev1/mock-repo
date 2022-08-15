import React from "react";
import "../css/style.css";
import "../scss/style.scss";
import Sort from "../component/sort";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "../component/nav";
import { Container } from "react-bootstrap";
import { useEffect } from "react";

function getCookie(name) {
	var cookieValue = null;
	if (document.cookie && document.cookie !== "") {
		var cookies = document.cookie.split(";");
		for (var i = 0; i < cookies.length; i++) {
			var cookie = cookies[i].trim()
			if (cookie.substring(0, name.length + 1) === name + "=") {
				cookieValue = decodeURIComponent(
					cookie.substring(name.length + 1)
				);
				break;
			}
		}
	}
	return cookieValue;
}

const Home = () => {
	useEffect(() => {
		console.log('csrf', getCookie("csrftoken"));
	}, []);

	return (
		<>
			<NavBar />
			<Container>
				<Sort />
			</Container>
		</>
	);
};

export default Home;
