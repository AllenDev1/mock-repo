import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useSearchParams } from "react-router-dom";
import { setToken } from "../Redux/authSlice";

const GoogleCallback = () => {
	const [searchParams, setSearchParams] = useSearchParams();

	const dispatch = useDispatch();

	let navigate = useNavigate();
	useEffect(() => {
		console.log("access token", searchParams.get("access_token"));
		console.log("refresh token", searchParams.get("refresh_token"));
		dispatch(setToken(searchParams.get("access_token")));
		navigate("/");
	}, [searchParams]);

	return <></>;
};

export default GoogleCallback;
