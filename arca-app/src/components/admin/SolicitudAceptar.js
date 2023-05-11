import React, {useState, useEffect} from 'react'
import styles from './SolicitudAceptar.module.css'
import DiseñoCardRefri from './DiseñoCardRefri';
import { useParams } from 'react-router-dom';

function SolicitudAceptar(props) {
    const id = useParams();

    const[InfoRefri, setInfoRefri] = useState([]);
    const [chofer, setchofer] = useState([]);
    const [selectedChofer, setSelectedChofer] = useState("");
    
    
    const [isFormComplete, setIsFormComplete] = useState(false);
    const [comment, setComment] = useState("");

    const options = {
        method: "GET",
        mode: "cors",
        headers: { "Content-Type": "application/json" },
    };      

    useEffect(() => {
        // Llamada de endpoint para choferes
        fetch("http://localhost:3001/admin/informacion/chofer", options)
          .then((response) => {
            return response.json();
          })
          .then (data => {
            if (Array.isArray(data)) { // Verificar si la respuesta es un array
              setchofer(data);
            } else {
              setchofer([data]); //Si no, se pone dentro de un array
            }
        })
          .catch((error) => console.log(error));
    
      }, []);

    // Seleccion de choferes
    const handleChoferChange = (event) => {
    console.log(" ----- CAMBIO DE CHOFER: ", event.target.value);
    setSelectedChofer(event.target.value);
  };

    // Se proporciona un comentario
    const handleCommentChange = (event) => {
        setComment(event.target.value);
      };

    useEffect(() => {
        // Verifica si el formulario esta incompleto
        if (selectedChofer) {
        setIsFormComplete(true);
        } else {
        setIsFormComplete(false);
        }
    }, [selectedChofer]);

    useEffect(() => {

        // Define the API endpoint URL based on the userId prop
        const url = `http://localhost:3001/admin/refrigeradores/solicitud/${id.id}/${encodeURIComponent(props.id_solicitud)}`;
        
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

    const formOptions = {
        method: "POST",
        mode: "cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          id_chofer: selectedChofer,
          comentario: comment,
          id_solicitud: props.id_solicitud
        }),
      };

      const handleSubmit = () => {
        if (!isFormComplete) {
            alert('Please complete the form before submitting');
            return;
          }
        // Make endpoint call with form data
        fetch(`http://localhost:3001/admin/relleno/solicitud`, formOptions)
          .then((response) => {
            response.json()
          })
          .then((data) => {
            
          })
          .catch((error) => console.log(error));
    
        // Clear form fields
        setComment("");
        setIsFormComplete(false);
        
        //Manda de regreso a landing
        window.location.href = `/admin/landing/${id.id}`
      };

      const OptionsDelete = {
        method: "POST",
        mode: "cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            id_solicitud: props.id_solicitud
          }),
      }

      const Rechazar = () => {
        // Make endpoint call with form data
        fetch(`http://localhost:3001/admin/delete`, OptionsDelete)
          .then((response) => {
            response.json()
          })
          .then((data) => {
            
          })
          .catch((error) => console.log(error));

        //Manda de regreso a landing
        window.location.href = `/admin/landing/${id.id}`
      }

  return (
    <div className={styles.PaddingCard}>
        <div className={styles.SolicitudAceptarBox}>
            <div className={styles.TituloSolicitudAceptar}>
                <span className={styles.TituloSolicitudesRevisar}>
                    <p className={styles.NombreTienda}>{props.nombre_tienda}</p>
                    <p className={styles.IdSolicitud}>Solicitud_{props.id_solicitud}</p>
                </span>
            </div>
            <div className={styles.DivEquiposFrios}>
                <p className={styles.EquiposFrios}>Equipos De Frío</p>
            </div>
            <div className={styles.FormatoExternoCardRefri}>
            {InfoRefri && 
                    InfoRefri.map((info) => (
                    <div key={info.codigo_serie}>
                        <DiseñoCardRefri modelo={info.modelo} codigo_serie={info.codigo_serie} cantidad={info.cantidad}/>
                    </div>
                    ))}
            </div>
            <div className={styles.FormatoComentarioAdmin}>
                <form>
                    <label htmlFor="comentario">
                        Escribe un comentario:
                    </label>
                    <textarea id="comentario" value={comment} onChange={handleCommentChange}></textarea>
                </form>
            </div>
            <div className={styles.FormatoEtiquetaChofer}>
                <form className={styles.FormChofer}>
                    <label className={styles.LabelChofer} htmlFor='chofer'>
                        Escoge un chofer
                    </label>
                    <select className={styles.Selectchofer} id='chofer' value={selectedChofer} onChange={handleChoferChange}>
                        <option value=''>Nombre del Chofer</option>
                        {chofer && chofer.map((chofer) => (
                            <option key={chofer.id_chofer} value={chofer.id_chofer}>
                            {`${chofer.nombre} ${chofer.apellido_paterno}`}
                            </option>
                        ))}
                    </select>
                </form>
            </div>
            <div className={styles.FormatoExternoBotones}>
                <input className={styles.BotonRechazarSolicitud} type='button' id='rechazarsolicitud' value="Rechazar" onClick={Rechazar}/>
                <input className={styles.BotonAceptarSolicitud} type='button' id='aceptarsolicitud' value="Aceptar" onClick={handleSubmit}/>
            </div>
        </div>
    </div>
    
  )
}

export default SolicitudAceptar