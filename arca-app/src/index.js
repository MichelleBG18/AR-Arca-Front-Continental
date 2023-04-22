import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LogIn from "./views/global/LogIn"
import LandingDesarrollador from "./views/desarrollador/landing"
import LandingAdmin from "./views/admin/landing"
import ErrorPortal from "./views/global/ErrorPortal"
import "./styles/index.css"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Paginas Globales */}
        <Route path="/" element={<LogIn />} />
          <Route path="*" element={<ErrorPortal />} />

        {/* Paginas Admin */}
        <Route path="/landing-admin" element={<LandingAdmin />} />
        
        {/* Paginas Desarrollador */}
        <Route path="/landing-desarrollador" element={<LandingDesarrollador />} />

        {/* Paginas Chofer */}

      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( <App /> );
