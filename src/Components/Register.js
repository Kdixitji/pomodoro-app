import React from "react";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  return (
    <div className="register">
      <h3 style={{ fontFamily: "Times New Roman", textAlign: "center" }}>
        Register
      </h3>
      <GoogleOAuthProvider clientId="344628382159-dpa8rgrli6qkigo049fmjofnlif4ler7.apps.googleusercontent.com">
        <div style={{ margin: "auto" }}>
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
      <p style={{ textAlign: "center", fontSize: "0.8rem", fontWeight: "500" }}>
        Or, Register Manually
      </p>
      <form className="login-form">
        {/* Input fields and other login form elements */}
        <div className="horizontal-grid">
          <div className="input-group">
            <label>
              First Name<span style={{ color: "Red" }}>*</span>
            </label>
            <input
              type="text"
              autoComplete="given-name"
              className="firstname"
              id="firstname"
              name="firstname"
              placeholder="Enter your First Name"
              required
            />
          </div>
          <div className="input-group">
            <label>
              Last Name<span style={{ color: "Red" }}>*</span>
            </label>
            <input
              type="text"
              className="lastname"
              id="lastname"
              placeholder="Enter your last Name"
              autoComplete="family-name"
              name="lastname"
              required
            />
          </div>
        </div>
        <div className="horizontal-grid">
          <div className="input-group">
            <label>
              Password<span style={{ color: "Red" }}>*</span>
            </label>
            <input
              type="password"
              className="password"
              id="password"
              placeholder="Enter Password"
              name="password"
              required
            />
          </div>
          <div className="input-group">
            <label>
              Confirm Password<span style={{ color: "Red" }}>*</span>
            </label>
            <input
              type="password"
              className="confirmpassword"
              name="confirmpassword"
              id="confirmpassword"
              placeholder="Re-Enter your Password"
              required
            />
          </div>
          <button className="button-79">Register</button>
        </div>
      </form>
    </div>
  );
};

export default Register;
