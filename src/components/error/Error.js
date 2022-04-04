import React from "react";
import catError from "../../image/cat-error.gif";

import style from "./Error.module.css";

export default function Error() {
  return (
    <div className="container">
      <div className={style.containerError}>
        <div>
          <h1>Ooops! We have a problem.</h1>
        </div>
        <div>
          <img src={catError} alt="alt"></img>
        </div>
      </div>
    </div>
  );
}
