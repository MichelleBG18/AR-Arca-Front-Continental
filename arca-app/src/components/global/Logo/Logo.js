import React from 'react'
import Logoimg from "../../../images/Arca_Continental_logo.png"
import styles from "./Logo.module.css"

function Logo() {
  return (
    <div className={styles.logo}>
        <img  src={Logoimg} alt="/" />
    </div>
  )
}

export default Logo