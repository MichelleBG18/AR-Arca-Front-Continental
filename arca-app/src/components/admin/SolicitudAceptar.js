import React, {useState, useEffect} from 'react'
import styles from './SolicitudAceptar.module.css'
import { useParams } from 'react-router-dom'

function SolicitudAceptar(props) {
    const id = useParams();

    const [chofer, setchofer] = useState([]);

    const options = {
        method: "GET",
        mode: "cors",
        headers: { "Content-Type": "application/json" },
    };

    useEffect(() => {
        // Llamada de endpoint para supervisores
        fetch("http://localhost:3001/admin/informacion/chofern0", dropDownOptions)
          .then((response) => {
            return response.json();
          })
          .then((data) => {
            setSupervisors(data.supervisores);
          })
          .catch((error) => console.log(error));
    
        // Llamada de endpoint para negocios
        fetch("http://localhost:8080/desarrollador/datosNegocios", dropDownOptions)
          .then((response) => response.json())
          .then((data) => {
            // Guardamos el array completo en la variable
            setStores(data.negocios);
          })
          .catch((error) => console.log(error));
      }, []);

  return (
    <div className={styles.SolicitudAceptarBox}>
        <div className={styles.TituloSolicitudAceptar}>
            <span className={styles.TituloSolicitudesRevisar}>
                <p className={styles.NombreTienda}>{props.nombre_tienda}</p>
                <p className={styles.IdSolicitud}>{props.id_solicitud}</p>
            </span>
        </div>
        <div className={styles.FormatoExternoCardRefri}>

        </div>
        <div className={styles.FormatoComentarioAdmin}>

        </div>
        <div className={styles.FormatoEtiquetaChofer}>
            <form className={styles.FormChofer}>
                <label className={styles.LabelChofer} htmlFor='chofer'>
                    Escoge un chofer
                </label>
                {/* <select className={styles.Selectchofer} id='chofer' value={VALORDEUSESTATEQUELLEGUEADECLARAR} onChange={ALGUNAFUNCIONQUELLEGUEADEFINIRPARACHOFER}>
                    <option value=''>Nombre del Chofer</option>
                    {*/ /*Aquí va el mapa*/ /*}
                </select> */}
            </form>
        </div>
        <div className={styles.FormatoExternoBotones}>

        </div>
    </div>
  )
}

export default SolicitudAceptar