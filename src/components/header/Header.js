import { Link } from "react-router-dom";
import Logo from "../logo/Logo";

import style from "./Header.module.css";

const Header = () => {
  return (
    <div className={style.header}>
      <Link to="/">
        <Logo />
      </Link>
      <nav>
        <Link to="/world">World</Link>
        <Link to="/politics">Politics</Link>
        <Link to="/science">Science &amp; Tech</Link>
        <Link to="/health">Health</Link>
      </nav>
    </div>
  );
};

export default Header;
