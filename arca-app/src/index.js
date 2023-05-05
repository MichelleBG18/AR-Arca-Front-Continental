import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LogIn from "./views/global/LogIn/LogIn"
import LandingDesarrollador from "./views/desarrollador/landing/landing"
import LandingAdmin from "./views/admin/landing/LandingAdmin"
import LandingChofer from "./views/chofer/landing/LandingChofer"
import ErrorPortal from "./views/global/ErrorPortal/ErrorPortal"
import CrearSolicitud from "./views/desarrollador/CrearSolicitud/CrearSolicitud";
import CatalogoRefrigerador from "./views/desarrollador/CatalogoRefrigerador";
import styles from "./index.css"
import AceptacionSolicitud from "./views/admin/landing/AceptacionSolicitud";
import Instalado from "./components/chofer/Instalado";

export default function App() {

  return (
    <div className={styles.appindex}>
      <BrowserRouter>
        <Routes>

          {/* Paginas Globales */}
          <Route path="/" element={<LogIn />} />
            <Route path="*" element={<ErrorPortal />} />
            <Route path="/clientes/:id" element={<ErrorPortal />} />
            <Route path="/solicitudes/:id" element={<ErrorPortal />} />

          {/* Paginas Admin ROL-ID 1*/}
          <Route path="/admin/landing/:id" element={<LandingAdmin />} />
          <Route path="/admin/solicitud/:id/:id_solicitud" element={<AceptacionSolicitud />}/>

          {/* Paginas Chofer ROL-ID 2*/}
          <Route path="/chofer/landing/:id" element={<LandingChofer />} />
          <Route path="/chofer/instalado" element={<Instalado />} />
          
          {/* Paginas Desarrollador ROL-ID 3*/}
          <Route path="/desarrollador/landing/:id" element={<LandingDesarrollador />} />
            <Route path="/desarrollador/crear-solicitud/:id" element={<CrearSolicitud />} />
            <Route path="/desarrollador/catalogo-refrigeradores/:id" element={<CatalogoRefrigerador />} />

        </Routes>
      </BrowserRouter>
    </div>
    
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( <App /> );
