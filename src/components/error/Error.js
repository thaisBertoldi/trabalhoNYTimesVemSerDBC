import React from "react";
import catError from "../../image/cat-loading.gif";

export default function Error() {
  return (
    <>
      <h1>Error</h1>
      <img src={catError} alt="alt"></img>
    </>
  );
}
