import React, {useEffect} from "react";
import { useSearchParams, useLocation } from "react-router-dom";

const GoogleCallback = () => {
	const [searchParams, setSearchParams] = useSearchParams();
    const { hash } = useLocation();
 useEffect(() => {
   console.log(hash)
 
 
 })
 
	return <>{hash}</>;
};

export default GoogleCallback;
