import { Link } from "react-router-dom";
import Logo from "../logo/Logo";
import Navbar from "../navbar/Navbar";

import style from "./Header.module.css";

const Header = () => {
  return (
    <div className={style.header}>
      <div>
      <Link to="/">
        <Logo />
      </Link>
      </div>
      <div>
        <Navbar />
      </div>
    </div>
  );
};

export default Header;
