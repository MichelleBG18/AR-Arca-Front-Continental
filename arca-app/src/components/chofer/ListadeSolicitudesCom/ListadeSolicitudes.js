import React, {useState, useEffect} from 'react'
import styles from './SolicitudesRevisar.module.css'
import DiseñoCardSolicitud from './DiseñoCardSolicitud'
import { useParams } from 'react-router-dom';

function ListadeSolicitudes() {
  const [InfoSolicitud, setInfoSolicitud] = useState([]);
  const id = useParams();

  useEffect(() => {

    // Define the API endpoint URL based on the userId prop
    const url = `http://localhost:3001/admin/solicitudes/${id.id}`;
    const options = {
      method: "GET",
      mode: "cors",
      headers: { "Content-Type": "application/json" },
    };

  // Make a fetch request to the endpoint
  fetch(url, options)
  .then(response => {
    switch (response.status) {
      case 404:
        throw new Error("User not found");
      case 401:
        throw new Error("Invalid Id");
      case 400:
        throw new Error("Something went wrong")
      default:
        break;
    }
    return response.json();
  })
  .then (data => {
    if (Array.isArray(data)) { // Verificar si la respuesta es un array
      setInfoSolicitud(data);
    } else {
      setInfoSolicitud([data]); //Si no, se pone dentro de un array
    }
})
  .catch((err) => {
    console.error("Error logging in: ", err);
  });
}, [id]); // Specify the userId as a dependency

  return (
    <div className={styles.SolicitudesRevisarBox}>
        <div className={styles.TituloSolicitudesRevisarBox}>
            <span className={styles.TituloSolicitudesRevisar}>Solicitudes Por Revisar</span>
        </div>
        <div className={styles.EjemploCard}>
          {InfoSolicitud && 
            InfoSolicitud.map((info) => (
              <div key={info.id_solicitud}>
                <DiseñoCardSolicitud nombre_tienda={info.nombre_tienda} colonia={info.colonia} calle={info.calle} num_externo={info.num_externo} nombre={info.nombre} id_solicitud={info.id_solicitud} fecha_generada={info.fecha_generada}/>
              </div>
            ))}
        </div>
    </div>
  );
}

export default ListadeSolicitudes