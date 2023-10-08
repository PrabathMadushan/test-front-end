import styles from "./CartQtyButton.module.css";
import {HiMinusSm, HiPlusSm} from "react-icons/hi";
import React from "react";

const CartQtyButton = () => {
    return <div className={styles.cartQtyButton}>
        <div className={styles.btn}><HiMinusSm/></div>
        <div>
            <div className={styles.value}>1</div>
            <div className={styles.des}>Nos</div>
        </div>
        <div className={styles.btn}><HiPlusSm/></div>
    </div>
}

export  default  CartQtyButton;