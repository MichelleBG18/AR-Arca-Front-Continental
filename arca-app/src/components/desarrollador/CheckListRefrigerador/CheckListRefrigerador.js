import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import RefriPrueba from "../../../images/refriPrueba.png";
import styles from "./CheckListRefrigerador.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMailForward } from "@fortawesome/free-solid-svg-icons";

function CheckListRefrigerador() {
    const id = useParams();
    const navigate = useNavigate();
  // Variables
  const [refrigeradores, setRefrigeradores] = useState([]); // Refrigeradores para desplegar
  const [refrigeradoresActualizados, setRefrigeradoresActualizados] = useState([]); // Refrigeradores para actualizar

  // Datos enviados en desde el catalogo de refris
  const location = useLocation();
  const listaRefrigeradores = location.state.selectedFreezer; // Contiene los id de los refrigeradores

  // Debugging
//   console.log("LISTA IDS: ", listaRefrigeradores);

  useEffect(() => {
    const data = {
      refrigeradores: listaRefrigeradores,
    };

    const options = {
      method: "POST",
      mode: "cors",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    };

    fetch("http://localhost:8080/desarrollador/getCheckList", options)
      .then((response) => response.json())
      .then((data) => {
        if (Array.isArray(data)) {
          // Verificar si la respuesta es un array
          setRefrigeradores(data.checkLists);
        } else {
          setRefrigeradores([data.checkLists][0]); //Si no, se pone dentro de un array
        }
      });
  }, []);

  function handleRefrigeradorSelection(id, campo, valor) {

    // Get the current refrigeradores data from the state variable
    const jsonData = [...refrigeradores];
    // Find the object in the list that matches the given ID
    const obj = jsonData.find((item) => item.id_refrigerador === id);

    // If the object is found, update the corresponding field with the given value
    if (obj) {
      obj[campo] = valor;
    }

    // Return the updated refrigeradores data
    setRefrigeradoresActualizados(jsonData)
    console.log("UDPATED DATA: ", jsonData);
    return jsonData;
  }

  function handleSubmit() {
    const data = {
      refrigeradores: refrigeradoresActualizados,
    //   id_solicitud: id.id,
    };

    console.log("DATA: ", JSON.stringify(data));

    const options = {
      method: "POST",
      mode: "cors",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    };

    fetch("http://localhost:8080/desarrollador/updateCheckList", options)
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          console.log("RESPUESTA: ", data);
          navigate(-3);
        }
      });
  }
  console.log("REFRIGERADORES ACTUALIZADOS: ", refrigeradoresActualizados)

  return (
    <div className={styles.catalogoRefrigerador}>
      <div className={styles.mapaRefrigeradores}>
        {refrigeradores.map((refrigerador) => (
          <div
            key={refrigerador.id_refrigerador}
            className={styles.cardRefrigerador}
          >
            <div className={styles.cardHeader}>
              <div style={{ display: " inline-block" }}>
                <p className={styles.modelRefrigerador}>
                  {refrigerador.modelo}
                </p>
                <p className={styles.serialRefrigerador}>
                  {refrigerador.codigo_serie}
                </p>
              </div>
              <div className={styles.titleContainer}>
                <p style={{ textAlign: "right" }}>Validacion de EDF</p>
              </div>
            </div>
            <hr
              style={{
                width: "88%",
                border: "1px solid rgba(171, 171, 171, 0.4)",
                borderRadius: "1px",
              }}
            />
            <div className={styles.specsRefrigerador}>
              <img src={RefriPrueba} alt="/"></img>
              <div className={styles.specsList}>
                <div className={styles.checkBoxContainer}>
                  <input
                    className={styles.checkBox}
                    type="checkbox"
                    value="Se necesitan mover otros inmuebles para la instalación"
                    checked={refrigerador.seNecesitaMover}
                    onChange={(e) =>
                      handleRefrigeradorSelection(
                        refrigerador.id_refrigerador,
                        "movimientos",
                        e.target.checked
                      )
                    }
                  />
                  <p className={styles.checkBoxLabels}>
                    Se necesitan mover otros inmuebles para la instalación
                  </p>
                </div>

                <div className={styles.checkBoxContainer}>
                  <input
                    className={styles.checkBox}
                    type="checkbox"
                    value="Cabe por la puerta principal del establecimiento"
                    checked={refrigerador.cabePorPuerta}
                    onChange={(e) =>
                      handleRefrigeradorSelection(
                        refrigerador.id_refrigerador,
                        "entrada",
                        e.target.checked
                      )
                    }
                  />
                  <p className={styles.checkBoxLabels}>
                    Cabe por la puerta principal del establecimiento
                  </p>
                </div>

                <div className={styles.checkBoxContainer}>
                  <input
                    className={styles.numberCheckBox}
                    type="number"
                    pattern="[0-9]{0,5}"
                    value={refrigerador.personalNecesario}
                    onChange={(e) =>
                      handleRefrigeradorSelection(
                        refrigerador.id_refrigerador,
                        "equipo",
                        parseInt(e.target.value)
                      )
                    }
                  />
                  <p className={styles.checkBoxLabels}>
                    Personal necesario para la instalación
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className={styles.navButtonBox}>
        <div className={styles.navButton} onClick={handleSubmit}>
          <FontAwesomeIcon icon={faMailForward} className={styles.iconActive} />
          <p className={styles.buttonCaption}>Enviar Solicitud</p>
        </div>
      </div>
    </div>
  );
}

export default CheckListRefrigerador;
