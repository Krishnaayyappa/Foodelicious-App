import React from "react";
import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css"

const CartButton = props => {
    return (
        <button className = {classes.button} onClick = {props.onCartClick}>
            <span className = {classes.icon}>
                <CartIcon />
            </span>
            <span>Your Cart</span>
            <span className={classes.badge}>
                3
            </span>
        </button>
    );
}

export default CartButton