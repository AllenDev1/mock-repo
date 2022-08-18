import axios from "axios";

class Auth {
	async fetchTokens(email, password) {
		const options = {
			method: "POST",
			url: "/gettoken/",
			headers: { "Content-Type": "application/json" },
			data: { email: email, password: password },
		};

		try {
			let response = await axios.request(options);
			return response.data["access"];
		} catch (e) {
			console.error(e);
		}
	}

	async fetchUser(token) {
		const options = {
			method: "GET",
			url: "/auth/user",
			headers: {
				Authorization: "JWT " + token,
			},
		};
		try {
			let response = await axios.request(options);
			return response.data;
		} catch (e) {
			console.error(e);
		}
	}
}

export default Auth;
