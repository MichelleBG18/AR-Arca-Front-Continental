import React from 'react'
import LandingHeader from '../../../components/global/LandingHeader/LandingHeader'
import RecentRequest from '../../../components/desarrollador/RecentRequest/RecentRequest'
import NavigationBar from '../../../components/global/NavigationBar/NavigationBar'
import MainFunctions from '../../../components/desarrollador/MainFunctions/MainFunctions'
import styles from './landing.module.css'
function landing() {
  return (
    <div className={styles.landing}>
      {/* Header */}
      <LandingHeader/>
      {/* AR & Solicitud */}
      <MainFunctions/>
      {/* Solicitudes Recientes */}
      <RecentRequest/>
      {/* Barra de navegación */}
      <NavigationBar/>
    </div>
  )
}

export default landing