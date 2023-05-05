import React, { useState, useEffect } from "react";
import styles from "./RecentRequest.module.css";
import RequestCard from "./RequestCard";
import CompletedIcon from '../../../images/CompletedIcon.svg'
import { useParams } from 'react-router-dom';


function RecentRequest() {
  const id = useParams();
  const [solicitudes, setSolicitudes] = useState([]);

  useEffect(() => {
    const options = {
      method: "POST",
      mode: "cors",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        id_desarrollador: id.id,
      }),
    };

    fetch("http://localhost:8080/desarrollador/getRecentRequests", options)
      .then((response) => response.json())
      .then((data) => {
        console.log("RES SOLICITUD: ", data);
        if (Array.isArray(data)) {
          // Verificar si la respuesta es un array
          setSolicitudes(data.solicitudes);
        } else {
          setSolicitudes([data.solicitudes][0]); //Si no, se pone dentro de un array
        }
      });
  }, []);

  return (
    <div className={styles.recentRequest}>
      <div className={styles.titleBox}>
        <p className={styles.title}>Solicitudes Recientes</p>
      </div>
      <hr
        style={{
          width: "88%",
          border: "1px solid rgba(171, 171, 171, 0.4)",
          borderRadius: "1px",
          marginTop: "16px",
        }}
      />
      <div className={styles.solicitudBox}>
        {solicitudes && solicitudes.map((info) => (
          <div key={info.id_solicitud} className={styles.solicitudCard}>
            <div className={styles.tiendaInfo}>
              <div className={styles.headerTexts}> 
                <p className={styles.tituloTienda}>{info.nombre_tienda}</p>
                <p className={styles.direccionTienda}>{info.calle} {info.num_externo} {info.colonia}</p>
                <p className={styles.direccionTienda}>{info.fecha_generada}</p>
              </div>
              <div className={styles.statusIconBox}>
                <img src={CompletedIcon} className={styles.statusIcon}></img>
                <p className={styles.statusCaption}>Solicitud enviada</p>
              </div>
            </div>
            <hr
        style={{
          width: "88%",
          border: "1px solid rgba(171, 171, 171, 0.4)",
          borderRadius: "1px",
          marginTop: "16px",
        }}
      />
            <RequestCard  nombre_tienda={info.nombre_tienda} colonia={info.colonia} calle={info.calle} num_externo={info.num_externo} nombre={info.nombre} id_solicitud={info.id_solicitud} fecha_generada={info.fecha_generada}/>
          </div>
        ))}
      </div>

    </div>
  );
}

export default RecentRequest;
