import React from 'react'
import styles from "./LogInForm.module.css"

function LogInForm() {
  return (
    <div className={styles.loginform}>
      <input type="text" placeholder="Username"/>
      <input type="password" placeholder="Password"/>
      <button>Log In</button>
    </div>
  )
}

export default LogInForm