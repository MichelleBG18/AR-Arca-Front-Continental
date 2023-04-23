import React from 'react'
import Logo from "../../../components/global/Logo/Logo"
import styles from "./LogIn.module.css"
import LogInForm from "../../../components/global/LogInForm/LogInForm"


function LogIn() {
  return (
    <div className={styles.login}>
      <Logo />
      <div className={styles.title}>
        Bienvenido
      </div>
      <LogInForm/>
    </div>
  )
}

export default LogIn



