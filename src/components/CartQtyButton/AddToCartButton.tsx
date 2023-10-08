import styles from "./AddToCartButton.module.css";
import {BsCart2} from "react-icons/bs";
import React from "react";

// This is a React functional component named AddToCartButton.
// It renders a button for adding a product to the cart.
const AddToCartButton = () => {
    return <div className={styles.addToCartButton}>
        <BsCart2/>
        <div className="ps-2">Add to cart</div>
    </div>
}

export default  AddToCartButton