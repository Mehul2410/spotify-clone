import React from "react";
import "./Login.css";

const Login = () => {
  return (
    <div className="login">
      <img src={process.env.PUBLIC_URL + "/Spotify-logo.png"} />
      <button>Login with spotify</button>
    </div>
  );
};

export default Login;
