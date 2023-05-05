import React, { useState, useEffect } from 'react'
import styles from './landingadmin.module.css'
import LandingHeaderAdmin from '../../../components/admin/LandingHeaderAdmin.js'
import SolicitudesRevisar from '../../../components/admin/SolicitudesRevisar'
import NavigationBar from '../../../components/global/NavigationBar/NavigationBar'
import KPIadmin from '../../../components/admin/KPIadmin'
import { useParams } from 'react-router-dom'

function LandingAdmin() {

  const [SolicitudesMensuales, setSolicitudesMensuales] = useState([]);
  const id = useParams();

  const options = {
    method: "GET",
    mode: "cors",
    headers: { "Content-Type": "application/json" },
};      

  useEffect(() => {
    // Llamada de endpoint para kpi admin
    fetch(`http://localhost:3001/admin/kpiadmin/${id.id}`, options)
      .then((response) => {
        return response.json();
      })
      .then (data => {
        if (Array.isArray(data)) { // Verificar si la respuesta es un array
          setSolicitudesMensuales(data[0]);
        } else {
          setSolicitudesMensuales([data]); //Si no, se pone dentro de un array
        }
    })
      .catch((error) => console.log(error));

  }, [id]);

  return (
    <div className={styles.landing}>
    {/* Header */}
    <LandingHeaderAdmin />
    <KPIadmin solicitudes_aprobadas={SolicitudesMensuales.aprobados} meta_mes = "20" />
    <SolicitudesRevisar />
    <NavigationBar/>
    </div>
  )
}

export default LandingAdmin