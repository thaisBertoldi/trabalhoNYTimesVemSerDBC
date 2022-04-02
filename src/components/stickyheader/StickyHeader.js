import { Link } from "react-router-dom";
import Navbar from "../navbar/Navbar";

const StickyHeader = () => {
  return (
    <div className={style.stickyHeader}>
      <Link to="/">NTT</Link>
      <Navbar />
    </div>
  );
};

export default StickyHeader;
