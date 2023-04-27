import React from "react";
import { NavLink, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faUsers, faClipboardList } from "@fortawesome/free-solid-svg-icons";
import styles from "./NavigationBar.module.css";

function NavigationBar() {
  const id = useParams();
  console.log();

  const url = window.location.pathname
  // TODO: Insertar props para poder hacer consultas de rutas con id de usuario
  //       Generar regex para multiples links 
  return (
    <div className={styles.navBarBox}>
      <nav>
        <ul>
          <li>
            <NavLink to={`/desarrollador/landing/${id.id}`}>
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
