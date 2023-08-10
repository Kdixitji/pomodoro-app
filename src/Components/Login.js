import React from "react";
import "./LoginStyles.css";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  return (
    <div className="login">
      <h3>Login</h3>
      <form className="login-form">
        {/* Input fields and other registration form elements */}
        <div className="horizontal-grid">
          <div className="input-group">
            <label>
              User ID <span style={{ color: "Red" }}>*</span>
            </label>
            <input
              type="text"
              className="username"
              name="username"
              autoComplete="off"
              id="username"
              placeholder="ENTER YOUR USER ID"
              required
            />
          </div>
          <div className="input-group">
            <label>
              Password<span style={{ color: "Red" }}>*</span>
            </label>
            <input
              type="password"
              className="password"
              name="password"
              autoComplete="off"
              id="password"
              placeholder="Enter Password"
              required
            />
          </div>
          <button className="button-79">Login</button>
          <p
            style={{
              textAlign: "center",
              fontSize: "0.8rem",
              fontWeight: "500",
            }}
          >
            Or, Register Manually
          </p>
          <GoogleOAuthProvider clientId="344628382159-dpa8rgrli6qkigo049fmjofnlif4ler7.apps.googleusercontent.com">
            <div className="google">
              <GoogleLogin
                onSuccess={(credentialResponse) => {
                  navigate("/pomodor");
                  //console.log(credentialResponse);
                }}
                onError={() => {
                  console.log("Login Failed");
                }}
              />
            </div>
          </GoogleOAuthProvider>
        </div>
      </form>
    </div>
  );
};

export default Login;
