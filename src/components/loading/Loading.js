import React from "react";
import hourglassLoading from "../../image/hourglass-loading.gif";

export default function Loading() {
  return (
    <>
      <h1>Listando</h1>
      <img src={hourglassLoading} alt="alt"></img>
    </>
  );
}