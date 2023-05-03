import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./NavButton.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAdd } from "@fortawesome/free-solid-svg-icons";

function NavButton() {
  const navigate = useNavigate();
  const handleClick = () =>
   {
    navigate(`/desarrollador/abrir-simulador/`)
  };
  return (
    <div className={styles.navButtonBox}>
      <div
        className={styles.navButton}
        onClick={handleClick  }
      >
         <FontAwesomeIcon icon={faAdd} className={styles.iconActive} />
         <p className={styles.buttonCaption}>Agregar</p>
      </div>
      {/* <hr className={styles.solid}></hr> */}
    </div>
  );
}

export default NavButton;