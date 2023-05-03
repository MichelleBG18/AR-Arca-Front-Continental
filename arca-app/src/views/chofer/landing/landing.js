import React from 'react'
import styles from './landingchofer.module.css'
import LandingHeaderChofer from '../../../components/chofer/LandingHeaderChofer'
import ListadeSolicitudes from '../../../components/chofer/ListadeSolicitudes'

function landing() {
  return (
    <div className={styles.landingchofer} >
    { /*Header */ }
    < LandingHeaderChofer />
    
    {/* Lista de Solicitudes */}
    <ListadeSolicitudes />

    
    </div>
  )
}

export default landing