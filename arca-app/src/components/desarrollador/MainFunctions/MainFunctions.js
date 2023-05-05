import React from "react";
import styles from "./MainFunctions.module.css";
import arPhoneArt from "../../../images/arPhoneArt.svg";
import crearSolicitudArt from "../../../images/crearSolicitudArt.svg";
import { useNavigate, useParams, useLocation } from "react-router-dom";

function MainFunctions() {
  const id = useParams();
  const navigate = useNavigate();

  const location = useLocation();
  const currentUrl = location.pathname;

  const handleSimulacionClick = () => {
    navigate(`/desarrollador/abrir-simulador/${id.id}`, {
      state: { previousUrl: currentUrl },
    });
  };

  const handleCrearSolicitudClick = () => {
    navigate(`/desarrollador/crear-solicitud/${id.id}`, {
      state: { previousUrl: currentUrl },
    });
  };

  return (
    <div className={styles.mainFunctionsBox}>
      <div
        className={styles.ctaBox}
        style={{ backgroundColor: "#DCFFEE" }}
        onClick={handleSimulacionClick}
      >
        <img src={arPhoneArt} className={styles.art} alt="/"></img>
        <div className={styles.captionBox}>
          <p className={styles.caption}>Simulacion AR</p>
        </div>
      </div>
      <div
        className={styles.ctaBox}
        style={{ backgroundColor: "#F2F4FF" }}
        onClick={handleCrearSolicitudClick}
      >
        <img src={crearSolicitudArt} className={styles.art} alt="/"></img>
        <div
          className={styles.captionBox}
          style={{ backgroundColor: "#206EE2" }}
        >
          <p className={styles.caption}>Crear Solicitud</p>
        </div>
      </div>
    </div>
  );
}

export default MainFunctions;
