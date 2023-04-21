import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./InfoCliente.css";
const InfoCliente = () => {
  const navigate = useNavigate();

  const onArrowLeftCircleIconClick = useCallback(() => {
    navigate("/perfil-del-cliente");
  }, [navigate]);

  return (
    <div className="info-cliente">
      <img
        className="arca-continental-logo-4-icon3"
        alt=""
        src="/arca-continental-logo-4@2x.png"
      />
      <b className="informacin-del-cliente">Información del Cliente</b>
      <div className="info-cliente-child" />
      <div className="nombre-cliente">
        <div className="vector-group">
          <img className="group-child33" alt="" src="/rectangle-91.svg" />
          <b className="abarrotes-la-central-container1">
            <p className="abarrotes-la-central7">Abarrotes La Central</p>
          </b>
        </div>
        <div className="a-black-jade-sky-blue22">
          <div className="jade-sky-blue22">
            <img
              className="clip-path-group22"
              alt=""
              src="/clip-path-group15.svg"
            />
            <b className="l7">L</b>
          </div>
        </div>
      </div>
      <img className="navbar-icon7" alt="" src="/navbar.svg" />
      <div className="navbar-parent1">
        <div className="navbar4">
          <div className="box4" />
        </div>
        <div className="guardar">Guardar</div>
      </div>
      <div className="actualizar-datos">
        <div className="actualizar-datos-inner">
          <div className="actualizar-datos-inner">
            <b className="actualizar-datos1">ACTUALIZAR DATOS</b>
            <div className="act-dueo">
              <div className="act-dueo-child" />
              <div className="nmero-de-contacto">Dueño/a:</div>
              <div className="log-in-usuario12">
                <img className="edit-2-icon" alt="" src="/edit2.svg" />
                <div className="lucia-valleverde-guzmn">
                  Lucia Valleverde Guzmán
                </div>
              </div>
            </div>
            <div className="act-numero-contacto">
              <div className="act-dueo-child" />
              <div className="nmero-de-contacto">Número de contacto:</div>
              <div className="log-in-usuario12">
                <img className="edit-2-icon" alt="" src="/edit2.svg" />
                <div className="lucia-valleverde-guzmn">8183123245</div>
              </div>
            </div>
            <div className="act-correo">
              <div className="act-dueo-child" />
              <div className="nmero-de-contacto">Correo electrónico</div>
              <div className="log-in-usuario12">
                <img className="edit-2-icon" alt="" src="/edit2.svg" />
                <div className="lucia-valleverde-guzmn">
                  Lucia Valleverde Guzmán
                </div>
              </div>
            </div>
            <div className="act-direccion">
              <div className="act-dueo-child" />
              <div className="nmero-de-contacto">Dirección:</div>
              <div className="log-in-usuario12">
                <img className="edit-2-icon" alt="" src="/edit2.svg" />
                <div className="lucia-valleverde-guzmn">
                  Porto Alegre 2848, Narvarte, 64830, Monte ...
                </div>
              </div>
            </div>
            <div className="act-comprobante-fiscal">
              <div className="act-comprobante-domicilio">
                <div className="comprobante-de-domicilio">
                  Comprobante de domicilio:
                </div>
              </div>
              <img className="upload-icon" alt="" src="/upload.svg" />
            </div>
            <div className="act-ine">
              <div className="act-comprobante-domicilio1">
                <div className="comprobante-de-domicilio">
                  Identificación oficial:
                </div>
              </div>
              <img className="upload-icon1" alt="" src="/upload.svg" />
            </div>
          </div>
        </div>
      </div>
      <img
        className="arrow-left-circle-icon2"
        alt=""
        src="/arrowleftcircle.svg"
        onClick={onArrowLeftCircleIconClick}
      />
    </div>
  );
};

export default InfoCliente;
