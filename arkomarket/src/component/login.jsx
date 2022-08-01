import React from "react";
import "../scss/login.scss";
import Google from "../Asset/Google.svg";
import Facebook from "../Asset/Facebook-1.svg";
import { BACKEND_URL } from "../config";

const Login = () => {
	// const login = () => {
	//   const csrfCookie = "";

	//   const options = {
	//     method: "POST",
	//     url: "/auth/login/",
	//     headers: {
	//       "Content-Type": "application/x-www-form-urlencoded",
	//       csrftoken: csrfCookie,
	//     },
	//     data: {
	//       csrfmiddlewaretoken: csrfCookie,
	//       login: "admin@gmail.com",
	//       password: "admin123",
	//     },
	//   };

	//   axios
	//     .request(options)
	//     .then(function (response) {
	//       console.log(response.data);
	//     })
	//     .catch(function (error) {
	//       console.error(error);
	//     });
	// };

	return (
		<div className="Login-container">
			<div className="Login-contents">
				<img src="https://images.unsplash.com/photo-1507146426996-ef05306b995a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHVwcHklMjBkb2d8ZW58MHx8MHx8&w=1000&q=80" />
				<div className="Login-social">
					<div className="google-login">
						<a href={BACKEND_URL + "google/login"}>
							<img src={Google} />
							<h5>Login with Google</h5>
						</a>
					</div>
					<div className="facebook-login">
						<a href="http://">
							<img src={Facebook} />
							<h5>Login with facebook</h5>
						</a>
					</div>
				</div>
				<p>
					If you continue, you are accepting ArkoMarket{" "}
					<a href="http://"> Terms and Conditions </a> and
					<a href="http://"> Privacy Policy.</a>
				</p>
			</div>
		</div>
	);
};

export default Login;
