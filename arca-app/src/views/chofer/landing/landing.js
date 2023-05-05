import React from 'react'
import styles from './landingchofer.module.css'
import LandingHeaderChofer from '../../../components/chofer/Header/LandingHeaderChofer'
import ListadeSolicitudes from '../../../components/chofer/ListadeSolicitudesCom/ListadeSolicitudes'
import DiseñoCardLista from '../../../components/chofer/ListadeSolicitudesCom/DiseñoCardLista'
import DiseñoCardRefriLista from '../../../components/chofer/ListadeSolicitudesCom/DiseñoCardRefriLista'
import checkpedido from '../../../components/chofer/Checkpedidocomp/checkpedido'

function landing() {
  return (
    <div className={styles.landingchofer} >
    { /*Header */ }
    < LandingHeaderChofer />
    
    {/* Lista de Solicitudes */}
    <ListadeSolicitudes /> 

    {/* Boxes para el desino  */}
    <DiseñoCardLista/>

    <DiseñoCardRefriLista/>    


    </div>
  )
}

export default landing