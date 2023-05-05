import React, { useState, useEffect } from "react";
import RefriPrueba from "../../../images/refriPrueba.png";
import styles from './RequestCard.module.css'

function RequestCard(props) {
    const [refrigeradores, setRefrigeradores] = useState([]);
  
    useEffect(() => {
        const options = {
            method: "POST",
            mode: "cors",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              id_solicitud: props.id_solicitud,
            }),
          };
  
      fetch("http://localhost:8080/desarrollador/getRecentRequestsRefris", options)
        .then((response) => response.json())
        .then((data) => {
            console.log("RES REFRI: ", data);
          if (Array.isArray(data)) {
            // Verificar si la respuesta es un array
            setRefrigeradores(data.solicitudes);
          } else {
            setRefrigeradores([data.solicitudes][0]); //Si no, se pone dentro de un array
          }
        });
    }, []);

  return (
    <div className={styles.refriCard}>
    {refrigeradores && refrigeradores.map((refrigerador) => (
        <div key={refrigerador.id_refrigerador} className={styles.solicitudBox}>
            <p>{refrigerador.modelo}</p>
        </div>
    ))}
    </div>
  )
}

export default RequestCard