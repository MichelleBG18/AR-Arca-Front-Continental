import React, { useState } from "react";
import styles from "./LogInForm.module.css";

function LogInForm() {
  const [email, setEmail] = useState("");
  const [clientPassword, setclientPassword] = useState("");


  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(`Username: ${email}, clientPassword: ${clientPassword}`);

    try {
      const response = await fetch("your_login_endpoint_here", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          email,
          clientPassword
        })
      });
  
      if (!response.ok) {
        throw new Error("Login failed");
      }
  
      const data = await response.json();
  
      // do something with the data, such as saving it to state
  
    } catch (error) {
      // handle the error, such as displaying a message to the user
      console.log(error);
    }
  };
  

  return (
    <div className={styles.loginform}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.inputTitle}>
          <p>Correo electronico </p>
        </div>
        <input
          className={styles.inputField}
          type="email"
          placeholder="ejemplo@arca.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <div className={styles.inputTitle}>
          <p>Contraseña </p>
        </div>
        <input
          className={styles.inputField}
          type="clientPassword"
          placeholder="● ● ● ● ● ● ● ●"
          value={clientPassword}
          onChange={(e) => setclientPassword(e.target.value)}
        />

        <button className={styles.loginButton}>Ingresar</button>
      </form>
    </div>
  );
}

export default LogInForm;
