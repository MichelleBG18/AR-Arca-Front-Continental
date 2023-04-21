import "./Splash.css";
const Splash = () => {
  return (
    <div className="splash">
      <div className="arca-continental-sab-container">
        <p className="arca-continental-sab">
          Arca Continental S.A.B. de C.V., Derechos reservados ©2023
        </p>
        <p className="arca-continental-sab">
          Av. San Jerónimo 813 Pte. C.P. 64640, Monterrey, México
        </p>
      </div>
      <div className="full-house-inc-parent">
        <div className="full-house-inc">{`FULL HOUSE INC.® `}</div>
        <img
          className="logo-fullhouse-icon"
          alt=""
          src="/logo-fullhouse@2x.png"
        />
        <img className="x-icon" alt="" src="/x.svg" />
        <img className="logo-arca-icon" alt="" src="/logo-arca@2x.png" />
      </div>
    </div>
  );
};

export default Splash;
