import { createSlice } from "@reduxjs/toolkit";
import Auth from "../auth/Auth";

const USER_LABEL = "arkomarket.user";
const TOKEN_LABEL = "arkomarket.user.token";

const auth = new Auth();

const initialState = {
	isLoggedin: localStorage.getItem(TOKEN_LABEL) !== null,
	user: localStorage.getItem(USER_LABEL),
	token: localStorage.getItem(TOKEN_LABEL),
};

export const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {
		login: (state, action) => {
			try {
				let token = auth.fetchTokens(
					action.payload.email,
					action.payload.password
				);
				localStorage.setItem(TOKEN_LABEL, token);
				state.token = token;

				let user = JSON.stringify(auth.fetchUser(token));
				localStorage.setItem(USER_LABEL, user);
				state.user = user;

				state.isLoggedin = true;
			} catch (e) {
				console.error(e);
			}
		},
		setToken: (state, action) => {
			try {
				let token = action.payload;
				localStorage.setItem(TOKEN_LABEL, token);
				state.token = token;

				let user = JSON.stringify(auth.fetchUser(token));
				localStorage.setItem(USER_LABEL, user);
				state.user = user;

				state.isLoggedin = true;
			} catch (e) {
				console.error(e);
			}
		},
	},
});

export const { login, setToken } = authSlice.actions;

export default authSlice.reducer;
