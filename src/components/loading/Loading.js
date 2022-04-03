import React from "react";
import hourglassLoading from "../../image/hourglass-loading.gif";

export default function Loading() {
  return (
    <div className="container">
      <h1>Listando</h1>
      <img src={hourglassLoading} width="150px" alt="alt"></img>
    </div>
  );
}