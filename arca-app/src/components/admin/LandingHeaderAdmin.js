import React, { useState, useEffect } from 'react';
import styles from './LandingHeaderAdmin.module.css'
import { useParams } from 'react-router-dom';

function LandingHeaderAdmin() {
  const [userName, setUserName] = useState('');
  const id = useParams();

  useEffect(() => {

    // Define the API endpoint URL based on the userId prop
    const url = `http://localhost:3001/admin/datos/${id.id}`;
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
      .then((data) => {
        setUserName(`${data.nombre} ${data.apellido_paterno}`);
      })
      .catch((err) => {
        console.error("Error logging in: ", err);
      });
  }); // Specify the userId as a dependency

  return (
    <div className={styles.headerBox}>
      <div className={styles.textoBienvenida}>
        <span className={styles.saludo}>Bienvenido</span>
        <span className={styles.nombreUsuario}>{userName}</span>
      </div>
      <img  src={require('../../../images/Arca_Continental_logo.png')} alt="/" className={styles.logo}/>
    </div>
  )
}

export default LandingHeaderAdmin;
