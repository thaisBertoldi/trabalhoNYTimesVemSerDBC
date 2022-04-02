import React from "react";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <div className={styles.footerContainer}>
      <div className={styles.footerMessage}>
        <div>
          <div>
            <h1 className={styles.fontTitleNY}>The Nelson's & Thais's Jornal</h1>
            <span>
              We believe that great journalism has the power to make each
              reader's life richer and more fulfilling, and all of society
              stronger and more just.
            </span>
          </div>
        </div>
      </div>
      <div>
        <small className={styles.footerCopyright}>
          ©{new Date().getFullYear()} The Nelson's & Thais's Jornal Company
        </small>
      </div>
    </div>
  );
}
