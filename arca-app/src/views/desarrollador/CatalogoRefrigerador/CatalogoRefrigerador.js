import React from "react";
import styles from "./CatalogoRefrigerador.module.css";
import GoBackCTA from "../../../components/global/GoBackCTA/GoBackCTA"
import RefrigeradoresCheckList from "../../../components/desarrollador/RefrigeradoresCheckList/RefrigeradoresCheckList";

const CatalogoRefrigerador = () =>{
  
  return (
    <div className={styles.catalogoRefrigerador}>
      <GoBackCTA />
      <RefrigeradoresCheckList/>
    </div>
  );
};
export default CatalogoRefrigerador;