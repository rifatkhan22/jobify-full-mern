import React from "react";
import { Link } from "react-router-dom";
import img from "../assets/images/not-found.svg";
import Wrapper from "../assets/wrappers/ErrorPage";

const Error = () => {
  return (
    <Wrapper className="full-page">
      <div>
        <img src={img} alt="not found" />
        <h3>Page was not found. Please try again</h3>
        <Link to="/">Go back to Dashboard</Link>
      </div>
    </Wrapper>
  );
};

export default Error;
