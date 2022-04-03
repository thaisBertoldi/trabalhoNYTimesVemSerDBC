import { Link } from "react-router-dom";

import styles from "./Navbar.module.css";

const Navbar = () => {
  return(
    <>
      <nav className={styles.nav}>
        <Link to="/world">World</Link>
        <Link to="/politics">Politics</Link>
        <Link to="/tech">Technology</Link>
        <Link to="/health">Health</Link>
      </nav>
    </>
  );
}

export default Navbar;