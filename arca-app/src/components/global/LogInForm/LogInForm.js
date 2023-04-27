import React, { useState } from "react";
import styles from "./LogInForm.module.css";
import { useNavigate } from "react-router-dom";

function LogInForm() {
  const [email, setEmail] = useState("");
  const [clientPassword, setclientPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(`
      ----- Login Triggered!
      \nUsername: ${email}, clientPassword: ${clientPassword}`);

    const url = "http://localhost:3001/users/logIn";
    const data = {
      email: email,
      clientPassword: clientPassword,
    };
    const options = {
      method: "POST",
      mode: "cors",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    };

    fetch(url, options)
      .then((response) => {
        switch (response.status) {
          case 404:
            throw new Error("User not found");
          case 401:
            throw new Error("Invalid password");
          case 400:
            throw new Error("Somthing went wrong")
          default:
            break;
        }
        return response.json();
      })
      .then((data) => {
        if (data.session.rol === 1) {
          navigate(`/landing-admin/${data.session.id_usuario}`);
        } else if (data.session.rol === 2) {
          navigate(`/landing-chofer/${data.session.id_usuario}`);
        } else if (data.session.rol === 3) {
          navigate(`/landing-desarrollador/${data.session.id_usuario}`);
        }
      })
      .catch((err) => {
        console.error("Error logging in: ", err);
      });
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
