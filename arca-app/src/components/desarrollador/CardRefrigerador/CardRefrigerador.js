import React, { useState, useEffect } from "react";

function CardRefrigerador() {
  const [freezers, setFreezers] = useState([]);

  const options = {
    method: "GET",
    mode: "cors",
    headers: { "Content-Type": "application/json" }
  };

  useEffect(() => {
    fetch("http://localhost:8080/desarrollador/catalogoRefrigeradores", options)
      .then((response) => response.json())
      .then (data => {
        console.log()
        if (Array.isArray(data)) { // Verificar si la respuesta es un array
          setFreezers(data.refrigeradores);
        } else {
          setFreezers([data.refrigeradores][0]); //Si no, se pone dentro de un array
        }
    })
  },[]);

  function handleFreezerSelection(id) {
    // Handle the selected freezer id
    console.log(`Selected freezer id: ${id}`);
  }

  return (
    <div>
      {freezers.map((freezer) => (
        <div key={freezer.id_refrigerador}>
          <label>
            <input
              type="checkbox"
              value={freezer.id_refrigerador}
              onChange={(e) => handleFreezerSelection(e.target.value)}
            />
            {freezer.modelo}
          </label>
        </div>
      ))}
    </div>
  );
}

export default CardRefrigerador


