import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./PerfilDelCliente.css";
const PerfilDelCliente = () => {
  const navigate = useNavigate();

  const onGroupContainer2Click = useCallback(() => {
    navigate("/simulador-ar");
  }, [navigate]);

  const onGroupContainer4Click = useCallback(() => {
    navigate("/info-cliente");
  }, [navigate]);

  return (
    <div className="perfil-del-cliente">
      <img className="vector-icon" alt="" src="/vector.svg" />
      <img className="navbar-icon4" alt="" src="/navbar.svg" />
      <img className="bell-icon" alt="" src="/bell.svg" />
      <div className="iphone-14-1">
        <img
          className="arca-continental-logo-4-icon1"
          alt=""
          src="/arca-continental-logo-4@2x.png"
        />
        <b className="perfil-del-cliente1">Perfil del Cliente</b>
        <div className="iphone-14-1-child" />
        <div className="group-parent12" onClick={onGroupContainer2Click}>
          <div className="rectangle-wrapper2">
            <div className="group-child20" />
          </div>
          <div className="iniciar-simulacin-parent">
            <div className="iniciar-simulacin">
              <p className="monterrey-nl">Iniciar Simulación</p>
            </div>
            <img className="vector-icon1" alt="" src="/vector1.svg" />
          </div>
        </div>
        <img className="line-chart-icon1" alt="" src="/line-chart1.svg" />
        <div className="iphone-14-1-item" />
      </div>
      <div className="group-parent13" onClick={onGroupContainer4Click}>
        <div className="vector-parent">
          <img className="rectangle-icon" alt="" src="/rectangle-9.svg" />
          <b className="abarrotes-la-central-container">
            <p className="monterrey-nl">Abarrotes La Central</p>
          </b>
          <div className="porto-alegre-2848-container">
            <p className="monterrey-nl">{`Porto Alegre 2848, Narvarte, `}</p>
            <p className="monterrey-nl">64830, Monterrey, N.L.</p>
          </div>
          <div className="dueoa-lucia-valleverde-container">
            <p className="monterrey-nl">
              <b className="dueoa">Dueño/a:</b>
              <span className="dueoa"> Lucia Valleverde Guzman</span>
            </p>
            <p className="monterrey-nl">
              <b className="dueoa">Numero de Contacto:</b>
              <span className="dueoa">{` `}</span>
              <span className="dueoa">
                <span className="span2">8183123245</span>
              </span>
            </p>
          </div>
          <img
            className="material-symbolsadd-location-icon"
            alt=""
            src="/materialsymbolsaddlocationrounded.svg"
          />
        </div>
        <div className="a-black-jade-sky-blue14">
          <div className="jade-sky-blue14">
            <img
              className="clip-path-group14"
              alt=""
              src="/clip-path-group12.svg"
            />
            <b className="l4">L</b>
          </div>
        </div>
      </div>
      <div className="group-parent14">
        <div className="rectangle-wrapper2">
          <div className="group-child21" />
        </div>
        <div className="iniciar-simulacin-parent">
          <img
            className="mdifountain-pen-tip-icon"
            alt=""
            src="/mdifountainpentip.svg"
          />
          <div className="iniciar-simulacin">Revisar Contratos</div>
        </div>
      </div>
      <b className="datos-de-venta">Datos de Venta</b>
      <div className="perfil-del-cliente-child" />
      <img className="navbar-icon4" alt="" src="/navbar.svg" />
    </div>
  );
};

export default PerfilDelCliente;
