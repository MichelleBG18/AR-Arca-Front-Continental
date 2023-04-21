import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./BRegistarNuevoUsuario.css";
const BRegistarNuevoUsuario = () => {
  const navigate = useNavigate();

  const onFrameContainerClick = useCallback(() => {
    navigate("/2-log-in");
  }, [navigate]);

  const onArrowLeftCircleIconClick = useCallback(() => {
    navigate("/2-log-in");
  }, [navigate]);

  return (
    <div className="b-registar-nuevo-usuario">
      <img
        className="arca-continental-logo-1-icon2"
        alt=""
        src="/arca-continental-logo-4@2x.png"
      />
      <div className="registrar-cuenta-parent">
        <b className="registrar-cuenta">REGISTRAR CUENTA</b>
        <div className="log-in-usuario5">
          <div className="log-in-usuario-child3" />
          <div className="escribe-tus-apellidos">Escribe tu nombre aquí...</div>
          <div className="nombre">NOMBRE</div>
        </div>
        <div className="log-in-usuario6">
          <div className="log-in-usuario-child3" />
          <div className="escribe-tus-apellidos">
            Escribe tus apellidos aquí...
          </div>
          <div className="apellidos">APELLIDOS</div>
        </div>
        <div className="log-in-usuario7">
          <div className="log-in-usuario-child3" />
          <div className="escribe-tus-apellidos">
            Escribe tu correo electronico aquí...
          </div>
          <div className="apellidos">CORREO ELECTRONICO</div>
        </div>
        <div className="log-in-usuario8">
          <div className="log-in-usuario-child3" />
          <div className="escribe-tus-apellidos">
            Escribe tu nombre de usuario aqui aquí...
          </div>
          <div className="apellidos">NOMBRE DE USUARIO</div>
        </div>
        <div className="log-in-usuario5">
          <div className="log-in-usuario-child3" />
          <div className="escribe-tus-apellidos">Escribe tu nombre aquí...</div>
          <div className="apellidos">NOMBRE</div>
        </div>
        <div className="el-nombre-de-usuario-se-establ-container">
          <div className="el-nombre-de-container1">
            <p className="el-nombre-de1">{`*El nombre de usuario se establecerá como la identificación para acceder a tu cuenta. `}</p>
            <p className="el-nombre-de1">
              Una vez registrado, no será posible modificarlo.
            </p>
          </div>
        </div>
        <div className="log-in-usuario10">
          <div className="log-in-usuario-child3" />
          <div className="escribe-tus-apellidos">
            Escribe tu contraseña aquí...
          </div>
          <div className="apellidos">CONTRASEÑA</div>
        </div>
        <div className="se-requiere-que-la-contrasea-container">
          <div className="el-nombre-de-container1">
            <p className="el-nombre-de1">{`*Se requiere que la contraseña tenga una longitud mínima de 12 caracteres, al menos un carácter especial, `}</p>
            <p className="el-nombre-de1">
              así como una combinación de letras mayúsculas y minúsculas.
            </p>
          </div>
        </div>
        <div className="log-in-usuario11">
          <div className="log-in-usuario-child3" />
          <div className="escribe-tus-apellidos">
            Escribe tu contraseña aquí...
          </div>
          <div className="apellidos">CONFIRMAR CONTRASEÑA</div>
        </div>
        <div className="las-contraseas-deben-coincidi-container">
          <div className="el-nombre-de-container1">
            *Las contraseñas deben coincidir.
          </div>
        </div>
        <div className="navbar-container" onClick={onFrameContainerClick}>
          <div className="navbar3">
            <div className="box3" />
          </div>
          <div className="crear-cuenta">Crear Cuenta</div>
        </div>
      </div>
      <img
        className="arrow-left-circle-icon1"
        alt=""
        src="/arrowleftcircle.svg"
        onClick={onArrowLeftCircleIconClick}
      />
    </div>
  );
};

export default BRegistarNuevoUsuario;
