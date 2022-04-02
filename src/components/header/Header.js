import { Link } from "react-router-dom";
import Logo from "../logo/Logo";

import style from './Header.module.css';

const Header = () => {
  return(
    <div className={style.header}>
      <Logo />
      <nav>
        <Link to='/'>Home</Link>
        <Link to='/health'>Health</Link>
        <Link to='/science'>Science</Link>
        <Link to='/politics'>Politics</Link>
      </nav>
    </div>
  );
}

export default Header;