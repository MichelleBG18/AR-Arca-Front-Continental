import React, {useState, useEffect} from 'react'
import SolicitudAceptar from '../../../components/admin/SolicitudAceptar'
import { useParams } from 'react-router-dom';
import styles from './AceptacionSolicitud.module.css'
import NavigationBar from '../../../components/global/NavigationBar/NavigationBar';
import GoBackCTAAdmin from '../../../components/admin/GoBackCTAAdmin';


function AceptacionSolicitud() {
  const [InfoGeneral, setInfoGeneral] = useState([]);
  const id_solicitud = useParams();
  const id = useParams();

  const options = {
    method: "GET",
    mode: "cors",
    headers: { "Content-Type": "application/json" },
  };

  useEffect(() => {

    // Define the API endpoint URL based on the userId prop
    const url = `http://localhost:3001/admin/general/${id.id}/${id_solicitud.id_solicitud}`;

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
        setInfoGeneral(data);
        console.log(data)
      } else {
        setInfoGeneral([data]); //Si no, se pone dentro de un array
        console.log(data)
      }
  })
    .catch((err) => {
      console.error("Error logging in: ", err);
    });
  }, [id, id_solicitud]); // Specify the userId as a dependency  

  console.log(InfoGeneral);

    return (
      <div className={styles.CardGeneral}>
        <GoBackCTAAdmin id={id.id}/>
        {InfoGeneral && 
          InfoGeneral.map((info) => (
            <div key={info.id_solicitud}>
                <SolicitudAceptar nombre_tienda={info.nombre_tienda} id_solicitud={info.id_solicitud}/>
            </div>
            ))}
        <NavigationBar />
      </div>
    )
  }

export default AceptacionSolicitud