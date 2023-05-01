import React from 'react'
import styles from './DiseñoCardSolicitud.module.css'
import DiseñoCardRefri from './DiseñoCardRefri'

function DiseñoCardSolicitud(props) {
  return (
    <div className={styles.PaddingCard}>
        <div className={styles.CardGeneral}>
            <div className={styles.TituloCard}> {/* Inicio TituloCard */}
                <span className={styles.TextoTituloCard}>
                    <p className={styles.nombre_tienda}>{props.nombre_tienda}</p>
                    <p className={styles.direccion}>{props.colonia}, {props.calle}, {props.num_externo}</p>
                </span>
                <div className={styles.FormatoExternoBoton}>
                    <input className={styles.BotonCardSolicitud} type='button' id='botonversolicitud' value="Ver"></input>
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
                <DiseñoCardRefri modelo="Modelo estático" codigo_serie="#0101234567890128TEC-IT" cantidad="1"/>
                <DiseñoCardRefri modelo="Modelo estático" codigo_serie="#0101234567890128TEC-IT" cantidad="1"/>
            </div>
        </div> 
    </div>

  )
}

export default DiseñoCardSolicitud