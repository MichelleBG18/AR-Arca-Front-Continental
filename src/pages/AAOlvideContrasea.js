import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./AAOlvideContrasea.css";
const AAOlvideContrasea = () => {
  const navigate = useNavigate();

  const onArrowLeftCircleIconClick = useCallback(() => {
    navigate("/2-log-in");
  }, [navigate]);

  const onFrameContainerClick = useCallback(() => {
    navigate("/2ab-olvide-contrasea-2");
  }, [navigate]);

  return (
    <div className="aa-olvide-contrasea">
      <img
        className="arca-continental-logo-1-icon"
        alt=""
        src="/arca-continental-logo-4@2x.png"
      />
      <div className="restablecer-datos-de-privacida-container">
        <p className="restablecer-datos">RESTABLECER DATOS</p>
        <p className="restablecer-datos">DE PRIVACIDAD</p>
      </div>
      <div className="olvidaste-tu-contrasea-container">
        <p className="restablecer-datos">{`¿Olvidaste tu contraseña o `}</p>
        <p className="restablecer-datos">nombre de usuario?</p>
      </div>
      <div className="le-enviaremos-un-container">
        <p className="restablecer-datos">
          Le enviaremos un enlace para restablecer
        </p>
        <p className="restablecer-datos">{` sus datos a la dirección de correo electrónico `}</p>
        <p className="restablecer-datos">registrada en su cuenta.</p>
      </div>
      <img
        className="mdipassword-reset-icon"
        alt=""
        src="/mdipasswordreset.svg"
      />
      <img
        className="arrow-left-circle-icon"
        alt=""
        src="/arrowleftcircle.svg"
        onClick={onArrowLeftCircleIconClick}
      />
      <div className="log-in-usuario1">
        <div className="log-in-usuario-item" />
        <div className="escribe-tu-correo">
          Escribe tu correo electronico aquí...
        </div>
        <div className="correo-electronico">CORREO ELECTRONICO</div>
      </div>
      <div className="navbar-parent" onClick={onFrameContainerClick}>
        <div className="navbar1">
          <div className="box1" />
        </div>
        <div className="enviar">Enviar</div>
      </div>
    </div>
  );
};

export default AAOlvideContrasea;
