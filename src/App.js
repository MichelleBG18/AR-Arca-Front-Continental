import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import MdirefrigeratorOutline from "./pages/MdirefrigeratorOutline";
import AgendaAdmin from "./pages/AgendaAdmin";
import Splash from "./pages/Splash";
import LogIn from "./pages/LogIn";
import AAOlvideContrasea from "./pages/AAOlvideContrasea";
import ABOlvideContrasea2 from "./pages/ABOlvideContrasea2";
import BRegistarNuevoUsuario from "./pages/BRegistarNuevoUsuario";
import LandingPageHomeAdmin from "./pages/LandingPageHomeAdmin";
import LandingPageHomeDesarrolla from "./pages/LandingPageHomeDesarrolla";
import CodigoTienda from "./pages/CodigoTienda";
import PerfilDelCliente from "./pages/PerfilDelCliente";
import Agenda from "./pages/Agenda";
import SimuladorAR from "./pages/SimuladorAR";
import InfoCliente from "./pages/InfoCliente";
import MaterialSymbolscameraEnhanc from "./pages/MaterialSymbolscameraEnhanc";
import MaterialSymbolscameraEnhanc1 from "./pages/MaterialSymbolscameraEnhanc1";
import { useEffect } from "react";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/agenda-admin":
        title = "";
        metaDescription = "";
        break;
      case "/1-splash":
        title = "";
        metaDescription = "";
        break;
      case "/2-log-in":
        title = "";
        metaDescription = "";
        break;
      case "/2aa-olvide-contrasea":
        title = "";
        metaDescription = "";
        break;
      case "/2ab-olvide-contrasea-2":
        title = "";
        metaDescription = "";
        break;
      case "/2b-registar-nuevo-usuario":
        title = "";
        metaDescription = "";
        break;
      case "/landing-pagehome-admin":
        title = "";
        metaDescription = "";
        break;
      case "/landing-pagehome-desarrollador":
        title = "";
        metaDescription = "";
        break;
      case "/codigo-tienda":
        title = "";
        metaDescription = "";
        break;
      case "/perfil-del-cliente":
        title = "";
        metaDescription = "";
        break;
      case "/agenda":
        title = "";
        metaDescription = "";
        break;
      case "/simulador-ar":
        title = "";
        metaDescription = "";
        break;
      case "/info-cliente":
        title = "";
        metaDescription = "";
        break;
      case "/materialsymbolscameraenhance":
        title = "";
        metaDescription = "";
        break;
      case "/materialsymbolscameraenhanceoutline":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<LogIn />} />
      <Route path="/Hola" element={<AAOlvideContrasea />} />
      <Route path="/Hola2" element={<ABOlvideContrasea2 />} />
      <Route path="/2-log-in" element={<LogIn />} />
      <Route path="/2aa-olvide-contrasea" element={<AAOlvideContrasea />} />
      <Route path="/2ab-olvide-contrasea-2" element={<ABOlvideContrasea2 />} />
      <Route
        path="/2b-registar-nuevo-usuario"
        element={<BRegistarNuevoUsuario />}
      />
      <Route
        path="/landing-pagehome-admin"
        element={<LandingPageHomeAdmin />}
      />
      <Route
        path="/landing-pagehome-desarrollador"
        element={<LandingPageHomeDesarrolla />}
      />
      <Route path="/codigo-tienda" element={<CodigoTienda />} />
      <Route path="/perfil-del-cliente" element={<PerfilDelCliente />} />
      <Route path="/agenda" element={<Agenda />} />
      <Route path="/simulador-ar" element={<SimuladorAR />} />
      <Route path="/info-cliente" element={<InfoCliente />} />
      <Route
        path="/materialsymbolscameraenhance"
        element={<MaterialSymbolscameraEnhanc />}
      />
      <Route
        path="/materialsymbolscameraenhanceoutline"
        element={<MaterialSymbolscameraEnhanc1 />}
      />
    </Routes>
  );
}
export default App;
