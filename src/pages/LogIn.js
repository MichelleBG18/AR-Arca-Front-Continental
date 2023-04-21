import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./LogIn.css";
const LogIn = () => {
  const navigate = useNavigate();

  const onOlvidMiContraseaClick = useCallback(() => {
    navigate("/2aa-olvide-contrasea");
  }, [navigate]);

  const onBotonContainerClick = useCallback(() => {
    navigate("/landing-pagehome-desarrollador");
  }, [navigate]);

  const onNuevoUsuarioRegistrateClick = useCallback(() => {
    navigate("/2b-registar-nuevo-usuario");
  }, [navigate]);

  return (
    <div className="log-in">
      <img className="logo-arca-icon1" alt="" src="/logo-arca1@2x.png" />
      <div className="log-in1">
        <div className="log-in-contrasea">
          <div className="contrasea">CONTRASEÑA</div>
          <div className="log-in-contrasea-child" />
          <div className="escribe-tu-contrasea">
            Escribe tu contraseña aquí...
          </div>
        </div>
        <div className="log-in-usuario">
          <div className="log-in-contrasea-child" />
          <div className="escribe-tu-nombre">
            Escribe tu nombre de usuario aquí...
          </div>
          <div className="nombre-de-usuario">NOMBRE DE USUARIO</div>
        </div>
        <b className="iniciar-session">INICIAR SESSION</b>
      </div>
      <b className="olvid-mi-contrasea" onClick={onOlvidMiContraseaClick}>
        Olvidé mi contraseña y/o nombre de usuario.
      </b>
      <div className="boton" onClick={onBotonContainerClick}>
        <div className="navbar">
          <div className="box" />
        </div>
        <div className="entrar">Entrar</div>
      </div>
      <div
        className="nuevo-usuario-registrate-container"
        onClick={onNuevoUsuarioRegistrateClick}
      >
        {`Nuevo usuario? `}
        <span className="registrate">Registrate</span>.
      </div>
    </div>
  );
};

export default LogIn;
