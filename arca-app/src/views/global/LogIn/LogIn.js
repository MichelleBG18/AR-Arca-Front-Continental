import React from 'react'
import Logo from "../../../components/global/Logo/Logo"
import styles from "./LogIn.module.css"
import LogInForm from "../../../components/global/LogInForm/LogInForm"


function LogIn() {
  return (
    <body className={styles.loginBody}>
      <div className={styles.login}>
        <Logo />
        <div className={styles.title}>
          Bienvenido
        </div>
        <LogInForm/>
      </div>
    </body>

  )
}

export default LogIn



