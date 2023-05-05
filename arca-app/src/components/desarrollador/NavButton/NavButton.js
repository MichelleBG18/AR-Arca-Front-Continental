import React from "react";
import styles from "./NavButton.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClipboardList } from "@fortawesome/free-solid-svg-icons";

function NavButton(props) {
  
  return (
    <div className={styles.navButtonBox}>
      <div
        className={styles.navButton}
        onClick={props.handleClick}
      >
         <FontAwesomeIcon icon={faClipboardList} className={styles.iconActive} />
         <p className={styles.buttonCaption}>{props.buttonCaption}</p>
      </div>
      {/* <hr className={styles.solid}></hr> */}
    </div>
  );
}

export default NavButton;
