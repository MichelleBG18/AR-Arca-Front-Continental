import React from 'react'
import styles from './landingchofer.module.css'
import LandingHeaderChofer from '../../../components/chofer/LandingHeaderChofer'
import NavigationBar from '../../../components/global/NavigationBar/NavigationBar'
import SolicitudesRevisar2 from '../../../components/chofer/SolicitudesRevisar2'

function LandingChofer() {

  return (
    <div className={styles.landingchofer} >
    { /*Header */ }
    <LandingHeaderChofer />
    <div className={styles.PaddingChofer}>
      <SolicitudesRevisar2 />
    </div>
    <NavigationBar />
    </div>
  )
}

export default LandingChofer