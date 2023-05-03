import React, { useState, useEffect } from 'react';
import { NavLink, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faUsers, faClipboardList } from "@fortawesome/free-solid-svg-icons";
import styles from "./NavigationBar.module.css";

function NavigationBar() {

  // use context, local storage -> set key (id, rol)
  // Decalaraicón de variables
  const id = useParams();
  const [userRol, setUserRol] = useState('');
  
  useEffect(() => {

    // Define the API endpoint URL based on the userId prop
    const url = `http://localhost:3001/users/user/${id.id}`;
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
        setUserRol(`${data.rol}`);
      })
      .catch((err) => {
        console.error("Error logging in: ", err);
      });
  }); 
  const rolType = parseInt(userRol) === 1 ? "admin" : parseInt(userRol) === 2 ? "chofer" : parseInt(userRol) === 3 ? "desarrollador" : "";
  // TODO: Agregar local storage
  return (
    <div className={styles.navBarBox}>
      <nav>
        <ul>
          <li>
            <NavLink to={`/${rolType}/landing/${id.id}`}>
              {({ isActive }) =>
                <div className={isActive ? styles.boxActive : styles.boxPending}>
                  <FontAwesomeIcon icon={faHome} className={isActive ? styles.iconActive: styles.iconPending} />  
                </div>
              }
            </NavLink>
          </li>
          <li>
            <NavLink to={`/clientes/${id.id}`}>
              {({ isActive }) =>
                <div className={isActive ? styles.boxActive : styles.boxPending}>
                  <FontAwesomeIcon icon={faUsers} className={isActive ? styles.iconActive: styles.iconPending} />  
                </div>
              }
            </NavLink>
          </li>
          <li>
            <NavLink to={`/solicitudes/${id.id}`}>
              {({ isActive }) =>
                <div className={isActive ? styles.boxActive : styles.boxPending}>
                  <FontAwesomeIcon icon={faClipboardList} className={isActive ? styles.iconActive: styles.iconPending} />  
                </div>
              }
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default NavigationBar;
