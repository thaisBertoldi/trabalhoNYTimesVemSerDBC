import React from "react";
import hourglassLoading from "../../image/hourglass-loading.gif";

import style from "./Loading.module.css";

export default function Loading() {
  return (
    <div className="container">
      <div className={style.containerLoading}>
        <div>
          <h1>Searching...</h1>
        </div>
        <div>
          <img src={hourglassLoading} alt="alt"></img>
        </div>
      </div>
    </div>
  );
}
