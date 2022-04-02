import React from "react";
import "./NotFound.css";
import notFoundImage from "../../image/not-found-page.gif";

export default function NotFound() {
  return (
    <div className="notFound">
      <img
        src={notFoundImage}
        className="notfoundImg"
        alt="not found page"
      ></img>
    </div>
  );
}
