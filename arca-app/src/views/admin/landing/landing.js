import React from 'react'
import styles from './landingadmin.module.css'
import LandingHeaderAdmin from '../../../components/admin/LandingHeaderAdmin.js'


function landing() {
  return (
    <div className={styles.landingadmin}>
    {/* Header */}
    <LandingHeaderAdmin />
    </div>
  )
}

export default landing