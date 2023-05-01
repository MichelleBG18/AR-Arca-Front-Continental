import React from 'react'
import styles from './landingadmin.module.css'
import LandingHeaderAdmin from '../../../components/admin/LandingHeaderAdmin.js'
import SolicitudesRevisar from '../../../components/admin/SolicitudesRevisar'


function landing() {
  return (
    <div className={styles.landing}>
    {/* Header */}
    <LandingHeaderAdmin />
    <SolicitudesRevisar />
    </div>
  )
}

export default landing