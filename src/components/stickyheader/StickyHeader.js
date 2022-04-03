import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../navbar/Navbar";

import style from "./StickyHeader.module.css";

const StickyHeader = () => {
  const stickyHeaderOff = {
    visibility: "hidden",
    transform: "translateY(-40px)",
  };

  const stickyHeaderOn = {
    visibility: "visible",
    transform: "translateY(0px)",
  };

  const [stickyHeader, setStickyHeader] = useState(false);
  const changeStickHeader = () => {
    window.scrollY >= 145 ? setStickyHeader(true) : setStickyHeader(false);
  };

  window.addEventListener("scroll", changeStickHeader);

  return (
    <div
      className={style.stickyHeader}
      style={stickyHeader ? stickyHeaderOn : stickyHeaderOff}
    >
      <div className={style.contentStickyHeader}>
        <Link to="/" className={style.fontTitleNY}>
          NTT
        </Link>
        <Navbar />
      </div>
    </div>
  );
};

export default StickyHeader;
