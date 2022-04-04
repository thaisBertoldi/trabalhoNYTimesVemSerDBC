import moment from "moment";

import style from "./InfoSection.module.css";

const InfoSection = () => {
  return (
    <div className={style.containerInfoSection}>
      <div className={style.infoSection}>
        <div>{moment().format("LLLL")}</div>
      </div>
    </div>
  );
};

export default InfoSection;
