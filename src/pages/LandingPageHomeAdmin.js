import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./LandingPageHomeAdmin.css";
const LandingPageHomeAdmin = () => {
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

  return (
    <div className="landing-pagehome-admin">
      <b className="datos">Datos</b>
      <div className="ver-todo">Ver Todo</div>
      <div className="landing-pagehome-admin-child" />
      <b className="solicitudes">Solicitudes</b>
      <div className="ver-todo1">Ver Todo</div>
      <div className="landing-pagehome-admin-item" />
      <div className="frame-div" onClick={onFrameContainerClick}>
        <div className="group-wrapper2">
          <div className="rectangle-parent4">
            <div className="group-child7" />
            <div className="a-black-jade-sky-blue7">
              <div className="jade-sky-blue7">
                <img
                  className="clip-path-group7"
                  alt=""
                  src="/clip-path-group5.svg"
                />
                <b className="m2">M</b>
              </div>
            </div>
          </div>
        </div>
        <div className="abarrote-montesurri3">Abarrote Montesurri</div>
        <div className="monteverde-332-coahuila-4343-parent">
          <div className="monteverde-332-coahuila">
            Monteverde 332, Coahuila, 43430
          </div>
          <div className="jueves-5-de">Jueves, 5 de Enero, 2022</div>
        </div>
        <img className="frame-child" alt="" src="/group-40.svg" />
      </div>
      <div className="group-parent4" onClick={onFrameContainer1Click}>
        <div className="group-wrapper2">
          <div className="rectangle-parent4">
            <div className="group-child7" />
            <div className="a-black-jade-sky-blue7">
              <div className="jade-sky-blue7">
                <img
                  className="clip-path-group7"
                  alt=""
                  src="/clip-path-group7.svg"
                />
                <b className="j1">J</b>
              </div>
            </div>
          </div>
        </div>
        <img className="frame-item" alt="" src="/group-48.svg" />
        <div className="locales-juarez">Locales Juarez</div>
        <div className="fentero-45-queretaro-25540-parent">
          <div className="monteverde-332-coahuila">
            Fentero 45, Queretaro, 25540
          </div>
          <div className="jueves-5-de">Viernes, 4 de Novimebre, 2021</div>
        </div>
      </div>
      <div className="group-parent5" onClick={onFrameContainer2Click}>
        <img className="frame-item" alt="" src="/group-48.svg" />
        <div className="abarrotes-la-central2">Abarrotes La Central</div>
        <div className="fentero-45-queretaro-25540-parent">
          <div className="monteverde-332-coahuila">
            Fentero 45, Queretaro, 25540
          </div>
          <div className="jueves-5-de">Viernes, 4 de Novimebre, 2021</div>
        </div>
        <div className="rectangle-parent6">
          <div className="group-child7" />
          <div className="a-black-jade-sky-blue7">
            <div className="jade-sky-blue7">
              <img
                className="clip-path-group7"
                alt=""
                src="/clip-path-group.svg"
              />
              <b className="l2">L</b>
            </div>
          </div>
        </div>
      </div>
      <div className="bienvenida">
        <b className="david-beltrn">David Beltrán</b>
        <div className="bienvenido">Bienvenido,</div>
      </div>
      <img
        className="arca-continental-logo-1-icon3"
        alt=""
        src="/arca-continental-logo-4@2x.png"
      />
      <img
        className="arca-continental-logo-2-icon"
        alt=""
        src="/arca-continental-logo-4@2x.png"
      />
      <img className="navbar-icon1" alt="" src="/navbar.svg" />
      <img className="line-chart-icon" alt="" src="/line-chart.svg" />
    </div>
  );
};

export default LandingPageHomeAdmin;
