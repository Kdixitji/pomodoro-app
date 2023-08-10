import React, { useState } from "react";
import "./MainPageStyles.css";
import img from "../Assets/pomodoro-timer.png";
import Login from "./Login";
import Register from "./Register";

const MainPage = () => {
  const [showRegistration, setShowRegistration] = useState(false);

  const handleSignupClick = () => {
    setShowRegistration(true);
  };

  const handleTabSwitch = () => {
    setShowRegistration(false);
  };

  return (
    <div className="main">
      <img src={img} alt="img" className="image" />
      <div className="login-box">
        {!showRegistration ? (
          <Login
            handleSignupClick={handleSignupClick}
            handleTabSwitch={handleTabSwitch}
          />
        ) : (
          <Register handleTabSwitch={handleTabSwitch} />
        )}
        <div className="container-bottom">
          {showRegistration ? (
            <p>
              Already have an Account?{" "}
              <span
                onClick={() => setShowRegistration(false)}
                style={{ cursor: "pointer", color: "blue" }}
              >
                log in
              </span>
            </p>
          ) : (
            <p className="bottom">
              Don't have an account?{" "}
              <span
                style={{ cursor: "pointer", color: "blue" }}
                onClick={handleSignupClick}
              >
                REGISTER
              </span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default MainPage;
