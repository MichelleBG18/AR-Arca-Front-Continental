import styles from "./GoBackCTA.module.css";
import { NavLink, useLocation } from "react-router-dom";
import backArrow from "../../../images/backArrow.svg";

function GoBackCTA() {
  const location = useLocation();
  const previousUrl = location.state.previousUrl;

  return (
    <div className={styles.goBackCTABox}>
        <NavLink to={`${previousUrl}`} className={styles.whiteBox}>
            <div className={styles.arrowBox}>
                <img src={backArrow} alt="back arrow" />
            </div>
        </NavLink>
    </div>
  );
}

export default GoBackCTA;
