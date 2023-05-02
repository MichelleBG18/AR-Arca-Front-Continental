import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LogIn from "./views/global/LogIn/LogIn"
import LandingDesarrollador from "./views/desarrollador/landing/landing"
import LandingAdmin from "./views/admin/landing/landing"
import LandingChofer from "./views/chofer/landing/landing"
import ErrorPortal from "./views/global/ErrorPortal/ErrorPortal"
import CrearSolicitud from "./views/desarrollador/CrearSolicitud/CrearSolicitud";
import CatalogoRefrigerador from "./views/desarrollador/CatalogoRefrigerador/CatalogoRefrigerador";
import styles from "./index.css"

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

          {/* Paginas Chofer ROL-ID 2*/}
          <Route path="/chofer/landing/:id" element={<LandingChofer />} />
          
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
