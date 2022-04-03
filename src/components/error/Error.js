import React from "react";
import catError from "../../image/cat-error.gif";

export default function Error() {
  return (
    <div className="container">
      <h1>Error</h1>
      <img src={catError} width="800px" alt="alt"></img>
    </div>
  );
}
