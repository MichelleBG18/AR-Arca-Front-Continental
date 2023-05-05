import React from 'react'
import styles from './KPIadmin.module.css'

function KPIadmin(props) {
  return (
    <div className={styles.CardGeneral}>
        <div className={styles.ContenedorInfo}>
            <span className={styles.SpanKPI}>
                <p className={styles.SolicitudesAprobadas}>Solicitudes aprobadas este mes: {props.solicitudes_aprobadas}</p>
                <p className={styles.SolicitudesMeta}>Meta del mes: {props.meta_mes}</p>
            </span>
        </div>
    </div>
  )
}

export default KPIadmin