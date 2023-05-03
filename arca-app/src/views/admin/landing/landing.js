import React from 'react'
import styles from './landingadmin.module.css'
import LandingHeaderAdmin from '../../../components/admin/LandingHeaderAdmin.js'
import SolicitudesRevisar from '../../../components/admin/SolicitudesRevisar'
import NavigationBar from '../../../components/global/NavigationBar/NavigationBar'

function landing() {
  return (
    <div className={styles.landing}>
    {/* Header */}
    <LandingHeaderAdmin />
    <SolicitudesRevisar />
    <NavigationBar/>
    </div>
  )
}

export default landing