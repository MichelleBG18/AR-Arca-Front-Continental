import React from 'react'
import styles from "./CatalogoRefrigerador.module.css"
import GoBackCTA from "../../../components/global/GoBackCTA/GoBackCTA";
import CardRefrigerador from '../../../components/desarrollador/CardRefrigerador/CardRefrigerador';

const CatalogoRefrigerador = (props) => {
  return (
    <div className={styles.catalogoRefrigerador}>
        <GoBackCTA/>
        <CardRefrigerador/>
    </div>
  )
}

export default CatalogoRefrigerador