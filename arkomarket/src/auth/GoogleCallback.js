import React, { useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";

const GoogleCallback = () => {
	const [searchParams, setSearchParams] = useSearchParams();

	let navigate = useNavigate();
	useEffect(() => {
		localStorage.setItem("access_token", searchParams.get("access_token"));
		navigate("/");
	}, [searchParams]);

	return <></>;
};

export default GoogleCallback;
