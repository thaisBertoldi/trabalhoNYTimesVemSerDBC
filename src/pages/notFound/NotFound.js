import React from "react";
import "./NotFound.css";
import { Link } from "react-router-dom";
import notFoundImage from "../../image/not-found-page.gif";

export default function NotFound() {
  return (
    <div className="container">
      <div className="notFound">
        <div>
          <h2>Oh, damn, looks like this page has been torn out.</h2>
        </div>
        <div>
          <img
            src={notFoundImage}
            className="notfoundImg"
            alt="not found page"
          ></img>
        </div>
        <div>
          <span>Please return to</span>{" "}
          <Link to="/">
            <button>Home</button>
          </Link>
          <span> page</span>
        </div>
      </div>
    </div>
  );
}
