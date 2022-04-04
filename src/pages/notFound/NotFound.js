import React from "react";
import { Link } from "react-router-dom";
import notFoundImage from "../../image/not-found-page.gif";

import "./NotFound.css";

export default function NotFound() {
  return (
    <div className="container">
      <div className="notFound">
        <div>
          <h2>Oh, damn, looks like this page has been torn out.</h2>
        </div>
        <div className="notFoundImg">
          <img src={notFoundImage} alt="not found page" />
        </div>
        <div className="notFoundReturn">
          <span>Please return to</span>{" "}
          <Link to="/">
            <button className="notFoundButtonHome">Home</button>
          </Link>
          <span> page</span>
        </div>
      </div>
    </div>
  );
}
