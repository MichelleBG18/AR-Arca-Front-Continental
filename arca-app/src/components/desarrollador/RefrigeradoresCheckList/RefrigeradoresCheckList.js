import React, { useState, useEffect } from "react";
import styles from "./RefrigeradoresCheckList.module.css";
import RefriPrueba from "../../../images/refriPrueba.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useParams, useNavigate, useLocation } from "react-router-dom";

function RefrigeradoresCheckList() {
  const [refrigeradores, setRefrigeradores] = useState([]);
  const [selectedFreezer, setSelectedFreezer] = useState([]);
  const id = useParams();
  const navigate = useNavigate();

  const location = useLocation();
  const currentUrl = location.pathname;

  useEffect(() => {
    const options = {
      method: "GET",
      mode: "cors",
      headers: { "Content-Type": "application/json" },
    };

    fetch("http://localhost:8080/desarrollador/catalogoRefrigeradores", options)
      .then((response) => response.json())
      .then((data) => {
        console.log();
        if (Array.isArray(data)) {
          // Verificar si la respuesta es un array
          setRefrigeradores(data.refrigeradores);
        } else {
          setRefrigeradores([data.refrigeradores][0]); //Si no, se pone dentro de un array
        }
      });
  }, []);

  function handleSubmit() {
    const data = {
      refrigeradores: selectedFreezer,
      id_solicitud: id.id,
    };

    console.log("DATA: ", JSON.stringify(data));

    const options = {
      method: "POST",
      mode: "cors",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    };

    

    fetch("http://localhost:8080/desarrollador/updateRefrigeradores", options)
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          console.log("RESPUESTA: ", data);
          console.log("URL: ", location.state.previousUrl);
          navigate(`/desarrollador/checklist-refrigeradores/${id.id}`, {
            state: {selectedFreezer},
            // state: { previousUrl: currentUrl, refrigeradores: selectedFreezer},
          });
        }
      });
  }

  function handlerefrigeradoreselection(id, event) {
    const isChecked = event.target.checked;

    // Handle the selected freezer id
    if (isChecked) {
      // Append the selected value to the array
      setSelectedFreezer([...selectedFreezer, id]);
    } else {
      // Remove the selected value from the array
      const indice = selectedFreezer.indexOf(id);
      if (indice !== -1) {
        selectedFreezer.splice(indice, 1); // Elimina el valor "5" del array
      }
    }
  }

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
              <div className={styles.checkBoxContainer}>
                <input
                  className={styles.checkBox}
                  type="checkbox"
                  value={refrigerador.id_refrigerador}
                  onChange={(e) =>
                    handlerefrigeradoreselection(
                      refrigerador.id_refrigerador,
                      e
                    )
                  }
                />
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
                <h4>Caracteristicas:</h4>
                <ul
                  style={{
                    paddingLeft: "0px",
                    marginBottom: "24px",
                    lineHeight: "15px",
                  }}
                >
                  <p>- {refrigerador.num_puertas} puerta(s)</p>
                  <p>- {refrigerador.capacidad_almacenaje} Litros</p>
                  <p>- {refrigerador.capacidad_kw_mes} venta mes</p>
                  <p>
                    - {refrigerador.anchura_cm} cm x {refrigerador.altura_cm} cm{" "}
                  </p>
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className={styles.navButtonBox}>
        <div className={styles.navButton} onClick={handleSubmit}>
          <p className={styles.buttonCaption}>Continuar</p>
        </div>
      </div>
    </div>
  );
}

export default RefrigeradoresCheckList;
