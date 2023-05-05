import styles from "./GoBackCTA.module.css";
import { NavLink, useLocation } from "react-router-dom";
import backArrow from '../../images/backArrow.svg'

function GoBackCTAAdmin(props) {

  return (
    <div className={styles.goBackCTABox}>
        <NavLink to={`/admin/landing/${props.id}`} className={styles.whiteBox}>
            <div className={styles.arrowBox}>
                <img src={backArrow} alt="back arrow" />
            </div>
        </NavLink>
    </div>
  );
}

export default GoBackCTAAdmin;
