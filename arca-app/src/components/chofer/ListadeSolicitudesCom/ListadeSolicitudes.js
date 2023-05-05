import React, {useState, useEffect} from 'react'
import styles from './ListadeSolicitudes.module.css'
import {DividerArca} from "../../../images/dividerArca.png"
import DiseñoCardLista from './DiseñoCardRefriLista';
import dividerArca from '../../../images/dividerArca.png'
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
  console.log(InfoSolicitud)

  return (
    <div className={styles.ListadeSolicitudesBox }>
      <div className={styles.TituloListadeSolicitudes }>
          <span className={styles.TituloListadeSolicitudes}>Lista de Solicitudes</span>
      </div>
      <img src={dividerArca}></img>
      <div className={styles.EjemploCard}>
        </div>
        <div className={styles.tiedanamebox}>
          <div className={styles.Titulotiendaname}>
            <span className={styles.Titulotiendaname}>Abarrotes la central</span>
          </div>
        
          Hola
        </div>

    </div>
  );
}

export default ListadeSolicitudes