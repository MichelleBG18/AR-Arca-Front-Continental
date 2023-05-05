import React, { useState, useEffect } from "react";
import styles from "./SolicitudForm.module.css";
import UploadImageIcon from "../../../images/uploadImageIcon.svg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAdd } from "@fortawesome/free-solid-svg-icons";
import { useParams, useNavigate, useLocation } from 'react-router-dom';

function SolicitudForm() {
  const navigate = useNavigate();
  const id = useParams();
  
  const location = useLocation();
  const previousUrl = location.pathname;

  const [selectedFile, setSelectedFile] = useState(null);
  const [supervisors, setSupervisors] = useState([]);
  const [stores, setStores] = useState([]);

  const [selectedSupervisor, setSelectedSupervisor] = useState("");
  const [selectedStore, setSelectedStore] = useState("");
  const [comment, setComment] = useState("");

  const [isFormComplete, setIsFormComplete] = useState(false);

  const dropDownOptions = {
    method: "GET",
    mode: "cors",
    headers: { "Content-Type": "application/json" }
  };

  useEffect(() => {
    // Llamada de endpoint para supervisores
    fetch("http://localhost:3001/desarrollador/datosSupervisores", dropDownOptions)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setSupervisors(data.supervisores);
      })
      .catch((error) => console.log(error));

    // Llamada de endpoint para negocios
    fetch("http://localhost:3001/desarrollador/datosNegocios", dropDownOptions)
      .then((response) => response.json())
      .then((data) => {
        // Guardamos el array completo en la variable
        setStores(data.negocios);
      })
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    // Verifica si el formulario esta incompleto
    if (selectedSupervisor && selectedStore) {
      setIsFormComplete(true);
    } else {
      setIsFormComplete(false);
    }
  }, [selectedSupervisor, selectedStore]);

  // Seleccion de supervisor
  const handleSupervisorChange = (event) => {
    console.log(" ----- CAMBIO DE SUPERVISOR: ", event.target.value);
    setSelectedSupervisor(event.target.value);

  };
  // Seleccion de tienda
  const handleStoreChange = (event) => {
    console.log(" ----- CAMBIO DE NEGOCIO: ", event.target.value);
    setSelectedStore(event.target.value);
  };
  // Se proporciona una imagen
  const handleFileSelect = (event) => {
    setSelectedFile(event.target.files[0]);
  };
  // Se proporciona un comentario
  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const getCurrentDate = () => {
    const today = new Date();
    const year = today.getFullYear();
    let month = today.getMonth() + 1;
    let day = today.getDate();
    if (month < 10) {
      month = "0" + month;
    }
    if (day < 10) {
      day = "0" + day;
    }
    return `${year}-${month}-${day}`;
  };
  
  const formOptions = {
    method: "POST",
    mode: "cors",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      id_desarrollador: id.id,
      id_supervisor: selectedSupervisor,
      id_negocio: selectedStore,
      // imagen_evidencia:"",
      comentario: comment,
      estatus: "Por confirmar",
      fecha_generada: getCurrentDate(),
      cedi: "CEDI-123"
    }),
  };
  

  const handleSubmit = () => {
    if (!isFormComplete) {
        alert('Please complete the form before submitting');
        return;
      }
    // Make endpoint call with form data
    fetch("http://localhost:3001/desarrollador/crearSolicitud", formOptions)
      .then((response) => {
        response.json()
        if (response.status === 200) {
          navigate(`/desarrollador/catalogo-refrigeradores/${id.id}`,{
            state: { previousUrl: previousUrl },
          });
        }
      })
      .then((data) => {

      })
      .catch((error) => console.log(error));

    // Clear form fields
    setSelectedSupervisor("");
    setSelectedStore("");
    setComment("");
    setIsFormComplete(false);
  };

  return (
    <div className={styles.solicitudForm}>
      <form className={styles.form}>
        <label htmlFor="supervisor" className={styles.caption}>
          Escoge un supervisor
        </label>
        <select
          id="supervisor"
          className={styles.dropDown}
          value={selectedSupervisor}
          onChange={handleSupervisorChange}
        >
          <option value="">Nombre del supervisor</option>
          {supervisors.map((supervisor) => (
            <option
              key={supervisor.id_supervisor}
              value={supervisor.id_supervisor}
            >
              {`${supervisor.nombre} ${supervisor.apellido_paterno}`}
            </option>
          ))}
        </select>

        <label htmlFor="store" className={styles.caption}>
          Escoge un negocio
        </label>
        <select
          id="store"
          className={styles.dropDown}
          value={selectedStore}
          onChange={handleStoreChange}
        >
          <option value="">Nombre de la tienda</option>
          {stores.map((store) => (
            <option key={store.id_negocio} value={store.id_negocio}>
              {`${store.nombre_tienda} en ${store.colonia}`}
            </option>
          ))}
        </select>

        <label htmlFor="store" className={styles.caption}>
          Evidencia (opcional)
        </label>

        <div className={styles.uploadContainer}>
                <img src={UploadImageIcon} alt="Upload icon" style={styles.icon} />
                <input type="file" id="file-upload" onChange={handleFileSelect} className={styles.inputFile}/>
                <span style={{marginLeft: "8px"}}>Seleccionar imagen</span>
            {selectedFile && <p>Selected: {selectedFile.name}</p>}
        </div>

        <label htmlFor="comment" className={styles.caption}>
          Deja un comentario (opcional)
        </label>
        <textarea
          id="comment"
          className={styles.comentBox}
          value={comment}
          onChange={handleCommentChange}
        ></textarea>
      </form>
      <div className={styles.navButtonBox}>
        <div className={styles.navButton} onClick={handleSubmit} disabled={!isFormComplete}>
          <FontAwesomeIcon icon={faAdd} className={styles.iconActive} />
          <p className={styles.buttonCaption}>Agregar</p>
        </div>
      </div>
    </div>
  );
}

export default SolicitudForm;
