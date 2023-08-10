import React, { useState, useEffect } from "react";
import img from "../Assets/pomodoro-timer.png";
import "./PomodorStyles.css";
import "react-circular-progressbar/dist/styles.css";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { BiReset, BiPlay, BiPause } from "react-icons/bi";

const Pomodor = () => {
  const [isPaused, setIsPaused] = useState(true);
  const [secondsLeft, setSecondsLeft] = useState(25 * 60); // 25 minutes in seconds
  const [mode, setMode] = useState("work");

  function initTimer() {
    setSecondsLeft(mode === "work" ? 25 * 60 : 5 * 60); // Set initial time based on mode
  }

  useEffect(() => {
    const initTimerInEffect = () => {
      setIsPaused(true);
      const nextMode = mode === "work" ? "break" : "work";
      setMode(nextMode);
      setSecondsLeft(nextMode === "work" ? 25 * 60 : 5 * 60);
      if (nextMode === "break") {
        alert("Break Timer Started");
      }
    };

    if (!isPaused) {
      const timer = setInterval(() => {
        if (secondsLeft > 0) {
          setSecondsLeft(secondsLeft - 1);
        } else {
          initTimerInEffect();
        }
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [isPaused, secondsLeft, mode]);

  return (
    <div className="main">
      <img src={img} alt="img" className="image" />
      <CircularProgressbar
        className="circle"
        value={(secondsLeft / (mode === "work" ? 25 * 60 : 5 * 60)) * 100}
        text={`${Math.floor(secondsLeft / 60)}:${
          secondsLeft % 60 < 10 ? "0" : ""
        }${secondsLeft % 60}`}
        background
        backgroundPadding={6}
        styles={buildStyles({
          backgroundColor: "#3e98c7",
          textColor: "#fff",
          pathColor: "red",
          trailColor: "transparent",
        })}
      />
      <div className="btn-container">
        <BiReset
          className="btn"
          onClick={() => {
            initTimer();
          }}
        />
        {isPaused ? (
          <BiPlay
            className="btn"
            onClick={() => {
              setIsPaused(false);
            }}
          />
        ) : (
          <BiPause
            className="btn"
            onClick={() => {
              setIsPaused(true);
            }}
          />
        )}
      </div>
    </div>
  );
};

export default Pomodor;
