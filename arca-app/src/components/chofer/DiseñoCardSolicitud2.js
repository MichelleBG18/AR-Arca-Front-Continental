import React, {useState, useEffect} from 'react'
import styles from './DiseñoCardSolicitud.module.css'
import { useParams } from 'react-router-dom';
import DiseñoCardRefri from '../admin/DiseñoCardRefri';

function DiseñoCardSolicitud2(props) {
    const[InfoRefri, setInfoRefri] = useState([]);
    const id = useParams();

    useEffect(() => {

        // Define the API endpoint URL based on the userId prop
        const url = `http://localhost:3001/admin/refri/chof/${id.id}/${encodeURIComponent(props.id_solicitud)}`;
        
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
          setInfoRefri(data);
          console.log(data)
        } else {
          setInfoRefri([data]); //Si no, se pone dentro de un array
          console.log(data)
        }
    })
      .catch((err) => {
        console.error("Error logging in: ", err);
      });
    }, [id, props.id_solicitud]); // Specify the userId as a dependency

    console.log(InfoRefri)
  return (
    <div className={styles.PaddingCard}>
        <div className={styles.CardGeneral}>
            <div className={styles.TituloCard}> {/* Inicio TituloCard */}
                <span className={styles.TextoTituloCard}>
                    <p className={styles.nombre_tienda}>{props.nombre_tienda}</p>
                    <p className={styles.direccion}>{props.colonia}, {props.calle}, {props.num_externo}</p>
                </span>
                <div className={styles.FormatoExternoBoton}>
                    <input className={styles.BotonCardSolicitud} type='button' id='botonversolicitud' value="Ver" onClick={() => {
                        window.location.href = `/admin/solicitud/${id.id}/${props.id_solicitud}`;
                        }}></input>
                </div>
            </div> {/* Fin TituloCard */}
            <div className={styles.Informacion_Imagen_Card}> {/*Inicio Informacion usuario y solicitud e imagen*/}
                <img className={styles.ImagenIcono} src={require("../../images/icono_admin.png")} alt=''/>
                <div className={styles.Informacion}>
                    <span className={styles.InformacionUsuario}>
                        <p className={styles.Desarrollador}>Desarrollador</p>
                        <p className={styles.NombreDesarrollador}>{props.nombre}</p>
                    </span>
                    <span className={styles.InformacionSolicitud}>
                        <p className={styles.id_solicitud}>Solicitud_{props.id_solicitud}</p>
                        <p className={styles.fecha_generada}>{props.fecha_generada}</p>
                    </span>
                </div>
            </div> {/*Fin Informacion usuario y solicitud e imagen*/}
            <div className={styles.Cards_Refrigerador}>
                {InfoRefri && 
                InfoRefri.map((info) => (
                <div key={info.codigo_serie}>
                    <DiseñoCardRefri modelo={info.modelo} codigo_serie={info.codigo_serie} cantidad={info.cantidad}/>
                </div>
                ))}
            </div>
        </div> 
    </div>

  )
}

export default DiseñoCardSolicitud2