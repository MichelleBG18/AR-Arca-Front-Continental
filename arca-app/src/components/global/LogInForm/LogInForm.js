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

    const url = "http://localhost:8080/users/logIn";
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

          default:
            break;
        }
        return response.json()})
      .then((data) => {
        console.log("------ Backend data: ",data)
        if (data.success) {
          navigate("/landing-admin")
        }
      })
      .catch((err) => {
        console.error("Error logging in: ", err);
      });
      // .then((response) => {
      //   console.log("------ Pre logic: ",response.status)
      //   if (response.status === 404 || response.status === 401) {
      //     throw new Error("User not found");
      //   }
      // })
      // .then((data) => {
      //   console.log("------ Backend Data: ", data);
      //   if (data.success) {
      //     // If login was successful, navigate to another page
      //     // window.location.href = "/Hola";
      //   } else {
      //     // Handle unsuccessful login (e.g. display error message)
      //   }
      // })
      // .catch((error) => {
      //   console.error("Error logging in: ", error);
      // });

    //   try {
    //     const response = await fetch("your_login_endpoint_here", {
    //       method: "POST",
    //       headers: {
    //         "Content-Type": "application/json"
    //       },
    //       body: JSON.stringify({
    //         email,
    //         clientPassword
    //       })
    //     });

    //     if (!response.ok) {
    //       throw new Error("Login failed");
    //     }

    //     const data = await response.json();

    //     // do something with the data, such as saving it to state

    //   } catch (error) {
    //     // handle the error, such as displaying a message to the user
    //     console.log(error);
    //   }
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

// import { useCallback, useState } from "react";
// import { useNavigate, Link } from "react-router-dom";
// import "./LogIn.css";
// const LogIn = () => {

//   const [email, setEmail] = useState("");
//   const [clientPassword, setPassword] = useState("");

//   const handleEmailChange = (event) => {
//     setEmail(event.target.value);
//     console.log(event.target.value)
//   };

//   const handlePasswordChange = (event) => {
//     setPassword(event.target.value);
//     console.log(event.target.value)
//   };

//   const handleSubmit = (event) => {
//     console.log("Boton se oprime", email, clientPassword)
//     event.preventDefault();

//     // Call endpoint to log in with email and password
// fetch("http://localhost:8080/users/logIn", {
//   method: "POST",
//   mode: 'cors',
//   headers: { "Content-Type": "application/json" },
//   body: JSON.stringify({ "email": email, "clientPassword": clientPassword })
// })
// .then((response) => console.log(response))
// .then((response) => {
//   if (response.status === 404 || response.status === 401) {
//     throw new Error("Network response was not ok");
//   }
//   return response.json();
// })
// .then((data) => {
//   console.log("Data recibida desde back: ", data.success)
//   if (data.success) {
//     // If login was successful, navigate to another page
//     // window.location.href = "/Hola";
//   } else {
//     // Handle unsuccessful login (e.g. display error message)
//   }
// })
// .catch((error) => {
//   console.error("Error logging in: ", error);
// });
//   };

//   const navigate = useNavigate();

//   return (
//     <div className="log-in">
//       <img className="logo-arca-icon1" alt="" src="/logo-arca1@2x.png" />
//       <div className="log-in1">
//         <div className="log-in-usuario">
//           <div className="log-in-contrasea-child" />
//           <input className="escribe-tu-contrasea" type="email" name="email" value={email} onChange={handleEmailChange} required />
//           <div className="nombre-de-usuario">NOMBRE DE USUARIO</div>
//         </div>
//         <div className="log-in-contrasea">
//           <div className="contrasea">CONTRASEÑA</div>
//           <div className="log-in-contrasea-child" />
//           <div className="escribe-tu-contrasea">
//             Escribe tu contraseña aquí...
//           </div>
//           <input className="escribe-tu-contrasea" type="email" name="email" value={clientPassword} onChange={handlePasswordChange} required />
//         </div>
//         <b className="iniciar-session">INICIAR SESSION</b>
//       </div>
//       <b className="olvid-mi-contrasea" onClick={console.log()}>
//         Olvidé mi contraseña y/o nombre de usuario.
//       </b>
//       <div className="boton" onClick={handleSubmit}>
//         <div className="navbar">
//           <div className="box" />
//         </div>
//         <div className="entrar">
//           {/* Entrar */}
//           <Link to="/landingadmin" className = "Link">Entrar</Link>
//         </div>
//       </div>
//       <div
//         className="nuevo-usuario-registrate-container"
//         onClick={console.log()}
//       >
//         {`Nuevo usuario? `}
//         <span className="registrate">Registrate</span>
//       </div>
//     </div>
//   );
// };

// export default LogIn;
