import React from "react";
import main from "../assets/images/main-alternative.svg";
import Wrapper from "../assets/wrappers/LandingPage";
import { Logo } from "../components";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
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
          <Link to="/register" className="btn btn-hero">
            Login/Register
          </Link>
        </div>
        <img src={main} alt="person" className="img main-img" />
      </div>
    </Wrapper>
  );
};

export default Landing;
