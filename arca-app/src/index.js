import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LogIn from "./views/global/LogIn/LogIn"
import LandingDesarrollador from "./views/desarrollador/landing/landing"
import LandingAdmin from "./views/admin/landing/landing"
import LandingChofer from "./views/chofer/landing/landing"
import ErrorPortal from "./views/global/ErrorPortal"
import styles from "./index.css"

export default function App() {
  return (
    <div className={styles.appindex}>
      <BrowserRouter>
        <Routes>

          {/* Paginas Globales */}
          <Route path="/" element={<LogIn />} />
            <Route path="*" element={<ErrorPortal />} />

          {/* Paginas Admin */}
          <Route path="/landing-admin/:id" element={<LandingAdmin />} />
          
          {/* Paginas Desarrollador */}
          <Route path="/landing-desarrollador/:id" element={<LandingDesarrollador />} />

          {/* Paginas Chofer */}
          <Route path="/landing-chofer/:id" element={<LandingChofer />} />

        </Routes>
      </BrowserRouter>
    </div>
    
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( <App /> );
