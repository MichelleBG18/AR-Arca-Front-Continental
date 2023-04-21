import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./LandingPageHomeDesarrolla.css";
const LandingPageHomeDesarrolla = () => {
  const navigate = useNavigate();

  const onFrameContainerClick = useCallback(() => {
    navigate("/codigo-tienda");
  }, [navigate]);

  const onFrameContainer1Click = useCallback(() => {
    navigate("/codigo-tienda");
  }, [navigate]);

  const onFrameContainer2Click = useCallback(() => {
    navigate("/codigo-tienda");
  }, [navigate]);

  const onFrameContainer3Click = useCallback(() => {
    navigate("/codigo-tienda");
  }, [navigate]);

  const onFrameContainer4Click = useCallback(() => {
    navigate("/codigo-tienda");
  }, [navigate]);

  return (
    <div className="landing-pagehome-desarrolla">
      <b className="prximas-visitas">Próximas Visitas</b>
      <div className="ver-todo2">Ver Todo</div>
      <div className="landing-pagehome-desarrolla-child" />
      <b className="visitas-anteriores">Visitas Anteriores</b>
      <div className="ver-historial">Ver Historial</div>
      <div className="landing-pagehome-desarrolla-item" />
      <div className="group-parent6">
        <div className="rectangle-wrapper">
          <div className="group-child10" />
        </div>
        <img className="group-icon" alt="" src="/group-42.svg" />
        <b className="mapa">Mapa</b>
      </div>
      <div className="group-parent7" onClick={onFrameContainerClick}>
        <div className="rectangle-parent7">
          <div className="group-child11" />
          <div className="a-black-jade-sky-blue10">
            <div className="jade-sky-blue10">
              <img
                className="clip-path-group10"
                alt=""
                src="/clip-path-group8.svg"
              />
              <b className="l3">L</b>
            </div>
          </div>
        </div>
        <div className="abarrotes-la-central3">Abarrotes La Central</div>
        <div className="kiel-2848-narvarte-64830-parent">
          <div className="kiel-2848-narvarte">Kiel 2848, Narvarte, 64830</div>
          <img className="group-child12" alt="" src="/group-40.svg" />
          <div className="viernes-28-de">Viernes, 28 de Marzo, 2:30 p.m.</div>
        </div>
        <img className="ellipse-icon" alt="" src="/ellipse-3.svg" />
      </div>
      <div className="group-parent8" onClick={onFrameContainer1Click}>
        <div className="rectangle-parent7">
          <div className="group-child11" />
          <div className="a-black-jade-sky-blue10">
            <div className="jade-sky-blue10">
              <img
                className="clip-path-group10"
                alt=""
                src="/clip-path-group9.svg"
              />
              <b className="n2">N</b>
            </div>
          </div>
        </div>
        <div className="abarrotes-la-central3">Nortesur Tiendita</div>
        <div className="kiel-2848-narvarte-64830-parent">
          <div className="kiel-2848-narvarte">Godinez 14, Tlaxcala, 63430</div>
          <img className="group-child12" alt="" src="/group-39.svg" />
          <div className="viernes-28-de">Lunes, 1 de Abril, 4:15 p.m.</div>
        </div>
        <img className="line-icon" alt="" src="/line-4.svg" />
        <img className="ellipse-icon" alt="" src="/ellipse-3.svg" />
      </div>
      <div className="group-parent9" onClick={onFrameContainer2Click}>
        <div className="group-wrapper4">
          <div className="rectangle-parent9">
            <div className="group-child11" />
            <div className="a-black-jade-sky-blue10">
              <div className="jade-sky-blue10">
                <img
                  className="clip-path-group10"
                  alt=""
                  src="/clip-path-group10.svg"
                />
                <b className="m3">M</b>
              </div>
            </div>
          </div>
        </div>
        <img className="frame-child2" alt="" src="/group-48.svg" />
        <div className="abarrote-montesurri4">Abarrote Montesurri</div>
        <div className="monteverde-332-coahuila-4343-group">
          <div className="monteverde-332-coahuila1">
            Monteverde 332, Coahuila, 43430
          </div>
          <div className="jueves-5-de1">Jueves, 5 de Enero, 2022</div>
        </div>
      </div>
      <div className="group-parent10" onClick={onFrameContainer3Click}>
        <div className="group-wrapper4">
          <div className="rectangle-parent9">
            <div className="group-child11" />
            <div className="a-black-jade-sky-blue10">
              <div className="jade-sky-blue10">
                <img
                  className="clip-path-group10"
                  alt=""
                  src="/clip-path-group11.svg"
                />
                <b className="j2">J</b>
              </div>
            </div>
          </div>
        </div>
        <img className="frame-child3" alt="" src="/group-48.svg" />
        <div className="locales-juarez1">Locales Juarez</div>
        <div className="fentero-45-queretaro-25540-container">
          <div className="monteverde-332-coahuila1">
            Fentero 45, Queretaro, 25540
          </div>
          <div className="jueves-5-de1">Viernes, 4 de Novimebre, 2021</div>
        </div>
      </div>
      <div className="bienvenida1">
        <b className="david-beltrn1">David Beltrán</b>
        <div className="bienvenido1">Bienvenido,</div>
      </div>
      <div className="frame-parent">
        <div className="group-wrapper6" onClick={onFrameContainer4Click}>
          <div className="rectangle-wrapper">
            <div className="group-child10" />
          </div>
        </div>
        <img className="group-child18" alt="" src="/group-31.svg" />
        <b className="mapa">Visita</b>
      </div>
      <div className="group-parent11">
        <div className="rectangle-wrapper">
          <div className="group-child10" />
        </div>
        <b className="correo">Correo</b>
        <img className="mail-icon" alt="" src="/mail-icon.svg" />
      </div>
      <img
        className="arca-continental-logo-1-icon4"
        alt=""
        src="/arca-continental-logo-4@2x.png"
      />
      <img
        className="arca-continental-logo-2-icon1"
        alt=""
        src="/arca-continental-logo-4@2x.png"
      />
      <img className="navbar-icon2" alt="" src="/navbar.svg" />
    </div>
  );
};

export default LandingPageHomeDesarrolla;
