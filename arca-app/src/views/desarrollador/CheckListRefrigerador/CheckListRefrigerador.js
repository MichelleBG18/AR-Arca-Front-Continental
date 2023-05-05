import React from 'react'
import CheckListRefrigeradorComponent from '../../../components/desarrollador/CheckListRefrigerador/CheckListRefrigerador'
import GoBackCTA from "../../../components/global/GoBackCTA/GoBackCTA"
import styles from './CheckListRefrigerador.module.css'

function CheckListRefrigerador() {
  return (
    <div className={styles.checkListRefrigerador}>
      <GoBackCTA />
      <CheckListRefrigeradorComponent/>
    </div>
  )
}

export default CheckListRefrigerador