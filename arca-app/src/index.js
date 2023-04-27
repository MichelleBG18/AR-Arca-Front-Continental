import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LogIn from "./views/global/LogIn/LogIn"
import LandingDesarrollador from "./views/desarrollador/landing/landing"
import LandingAdmin from "./views/admin/landing/landing"
import LandingChofer from "./views/chofer/landing/landing"
import ErrorPortal from "./views/global/ErrorPortal/ErrorPortal"
import styles from "./index.css"

export default function App() {
  return (
    <div className={styles.appindex}>
      <BrowserRouter>
        <Routes>

          {/* Paginas Globales */}
          <Route path="/" element={<LogIn />} />
            <Route path="*" element={<ErrorPortal />} />

          {/* Paginas Admin ID 1*/}
          <Route path="/admin/landing/:id" element={<LandingAdmin />} />

          {/* Paginas Chofer ID 2*/}
          <Route path="/chofer/landing/:id" element={<LandingChofer />} />
          
          {/* Paginas Desarrollador ID 3*/}
          <Route path="/desarrollador/landing/:id" element={<LandingDesarrollador />} />

        </Routes>
      </BrowserRouter>
    </div>
    
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( <App /> );
