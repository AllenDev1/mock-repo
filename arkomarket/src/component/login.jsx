import React from "react";
import "../scss/login.scss";
import Cross from "../Asset/Cross.svg";
import Google from "../Asset/Google.svg";
import Facebook from "../Asset/Facebook-1.svg";


const Login = () => {
  return (
    <div className="Login-container">
      <div className="cross">
        {" "}
        <img src={Cross} />
      </div>
      <div className="Login-contents">
        <img src="https://images.unsplash.com/photo-1507146426996-ef05306b995a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHVwcHklMjBkb2d8ZW58MHx8MHx8&w=1000&q=80" />
      <div className="Login-social">
        <div className="google-login">
          <img src={Google}/>
          <h5>Login with Google</h5>
        </div>
        <div className="facebook-login">
          <img src={Facebook}/>
          <h5>Login with facebook</h5>
        </div>
        </div>
        <p>If you continue, you are accepting ArkoMarket Terms and
Conditions and Privacy Policy.</p>

      </div>
    </div>
  );
};

export default Login;
