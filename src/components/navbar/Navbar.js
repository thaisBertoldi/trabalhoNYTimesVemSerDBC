import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";

import styles from "./Navbar.module.css";

const Navbar = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

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