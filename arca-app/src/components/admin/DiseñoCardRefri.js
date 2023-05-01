import React from 'react'
import styles from './DiseñoCardRefri.module.css'

function DiseñoCardRefri(props) {
  return (
    <div className={styles.DesignCardRefri}>
        <img className={styles.ImagenRefri} src={require("../../images/refri_card.png")} alt='' />
        <div className={styles.InformacionRefri}>
            <span className={styles.InfoModeloSerie}>
                <p className={styles.Modelo}>{props.modelo}</p>
                <p className={styles.CodigoSerie}>{props.codigo_serie}</p>
            </span>
            <span className={styles.InfoCantidad}>
                <p className={styles.Cantidad}>x {props.cantidad}</p>
            </span>
        </div>
    </div>
  )
}

export default DiseñoCardRefri