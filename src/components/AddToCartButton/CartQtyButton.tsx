import styles from "./CartQtyButton.module.css";
import {HiMinusSm, HiPlusSm} from "react-icons/hi";
import React from "react";

interface IProps{
    onDecrease:()=>void;
    onIncrease:()=>void;
    quantity:number;
}

// This is a React functional component named CartQtyButton.
// It renders a button with options for adjusting the quantity of a product in the cart.
const CartQtyButton = (props:IProps) => {
    return <div className={styles.cartQtyButton}>
        <div className={styles.btn} onClick={props.onDecrease}><HiMinusSm/></div>
        <div>
            <div className={styles.value}>{props.quantity}</div>
            <div className={styles.des}>Nos</div>
        </div>
        <div className={styles.btn} onClick={props.onIncrease}><HiPlusSm/></div>
    </div>
}

export  default  CartQtyButton;