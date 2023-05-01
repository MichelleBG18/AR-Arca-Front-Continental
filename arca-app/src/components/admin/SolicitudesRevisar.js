import React from 'react'
import styles from './SolicitudesRevisar.module.css'
import DiseñoCardSolicitud from './DiseñoCardSolicitud'

function SolicitudesRevisar() {
  return (
    <div className={styles.SolicitudesRevisarBox}>
        <div className={styles.TituloSolicitudesRevisarBox}>
            <span className={styles.TituloSolicitudesRevisar}>Solicitudes Por Revisar</span>
        </div>
        <div className={styles.EjemploCard}>
            <DiseñoCardSolicitud nombre_tienda="Abarrote La Central" colonia="Valle" calle="Madero" num_externo="123456" nombre="Michael Jordan" id_solicitud="1" fecha_generada="2023/04/29"/>
            <DiseñoCardSolicitud nombre_tienda="Abarrote La Central" colonia="Valle" calle="Madero" num_externo="123456" nombre="Michael Jordan" id_solicitud="1" fecha_generada="2023/04/29"/>
        </div>
    </div>
  )
}

export default SolicitudesRevisar