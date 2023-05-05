import React from "react";
import styles from "./CrearSolicitud.module.css";
import GoBackCTA from "../../../components/global/GoBackCTA/GoBackCTA";
import SolicitudForm from "../../../components/desarrollador/SolicitudForm/SolicitudForm";

const CrearSolicitud = () =>{

  return (
    <div className={styles.crearSolicitud}>
      <GoBackCTA />
      <SolicitudForm/>
    </div>
  );
}

export default CrearSolicitud;
