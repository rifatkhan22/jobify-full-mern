import React from "react";
import logo from "../assets/images/logo.svg";
import main from "../assets/images/main.svg";
import Wrapper from "../assets/wrappers/LandingPage";

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <img src={logo} alt="jobify" className="logo" />
      </nav>
      <div className="container page">
        <div className="info">
          <h1>
            job <span>tracking</span> app
          </h1>
          <p>
            A job tracking system measures the exact time that you've spent on
            specific online tasks, including activity across web pages and apps.
            Start the timer for a job you're working on with one click. You can
            track time from your browser, or via extension, desktop, and mobile
            app.
          </p>
          <button className="btn btn-hero">Login/Register</button>
        </div>
        <img src={main} alt="person" className="img main-img" />
      </div>
    </Wrapper>
  );
};

export default Landing;
