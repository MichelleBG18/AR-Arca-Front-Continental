import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./ABOlvideContrasea2.css";
const ABOlvideContrasea2 = () => {
  const navigate = useNavigate();

  const onFrameContainerClick = useCallback(() => {
    navigate("/landing-pagehome-desarrollador");
  }, [navigate]);

  return (
    <div className="ab-olvide-contrasea-2">
      <img
        className="arca-continental-logo-1-icon1"
        alt=""
        src="/arca-continental-logo-4@2x.png"
      />
      <div className="restablecer-datos-de-privacida-container1">
        <p className="el-nombre-de">RESTABLECER DATOS</p>
        <p className="el-nombre-de">DE PRIVACIDAD</p>
      </div>
      <img
        className="mdipassword-reset-icon1"
        alt=""
        src="/mdipasswordreset.svg"
      />
      <div className="log-in-usuario2">
        <div className="log-in-usuario-inner" />
        <div className="escribe-tu-nombre1">
          Escribe tu nombre de usuario aqui aquí...
        </div>
        <div className="confirmar-contrasea">NOMBRE DE USUARIO</div>
      </div>
      <div className="el-nombre-de-usuario-se-establ-wrapper">
        <div className="el-nombre-de-container">
          <p className="el-nombre-de">{`*El nombre de usuario se establecerá como la identificación para acceder a tu cuenta. `}</p>
          <p className="el-nombre-de">
            Una vez registrado, no será posible modificarlo.
          </p>
        </div>
      </div>
      <div className="log-in-usuario3">
        <div className="log-in-usuario-inner" />
        <div className="escribe-tu-nombre1">Escribe tu contraseña aquí...</div>
        <div className="confirmar-contrasea">CONTRASEÑA</div>
      </div>
      <div className="se-requiere-que-la-contrasea-wrapper">
        <div className="el-nombre-de-container">
          <p className="el-nombre-de">{`*Se requiere que la contraseña tenga una longitud mínima de 12 caracteres, al menos un carácter especial, `}</p>
          <p className="el-nombre-de">
            así como una combinación de letras mayúsculas y minúsculas.
          </p>
        </div>
      </div>
      <div className="log-in-usuario4">
        <div className="log-in-usuario-inner" />
        <div className="escribe-tu-nombre1">Escribe tu contraseña aquí...</div>
        <div className="confirmar-contrasea">CONFIRMAR CONTRASEÑA</div>
      </div>
      <div className="las-contraseas-deben-coincidi-wrapper">
        <div className="el-nombre-de-container">
          *Las contraseñas deben coincidir.
        </div>
      </div>
      <div className="navbar-group" onClick={onFrameContainerClick}>
        <div className="navbar2">
          <div className="box2" />
        </div>
        <div className="ingresar">Ingresar</div>
      </div>
      <div className="restablezca-su-nombre-container">
        <p className="el-nombre-de">{`Restablezca su nombre de usuario y contraseña ingresando `}</p>
        <p className="el-nombre-de">{`sus nuevos datos. Asegúrese de anotarlos, ya que necesitará `}</p>
        <p className="el-nombre-de">
          esta información para volver a iniciar sesión.
        </p>
      </div>
    </div>
  );
};

export default ABOlvideContrasea2;
