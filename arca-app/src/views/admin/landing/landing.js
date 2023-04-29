import React from 'react'
import styles from './landingadmin.module.css'
import LandingHeaderAdmin from '../../../components/admin/LandingHeaderAdmin.js'
import NavigationBar from '../../../components/global/NavigationBar/NavigationBar'


function landing() {
  return (
    <div className={styles.landingadmin}>
    {/* Header */}
    <LandingHeaderAdmin />

    <NavigationBar/>
    </div>
  )
}

export default landing