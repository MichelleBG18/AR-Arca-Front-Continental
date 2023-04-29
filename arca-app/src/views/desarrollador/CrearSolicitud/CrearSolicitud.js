import React from "react";
import styles from "./CrearSolicitud.module.css";
import GoBackCTA from "../../../components/desarrollador/GoBackCTA/GoBackCTA";

const CrearSolicitud = (props) =>{

  return (
    <div className={styles.crearSolicitud}>
      <GoBackCTA />
    </div>
  );
}

export default CrearSolicitud;
