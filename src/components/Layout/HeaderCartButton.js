import React, { useContext, useEffect, useState } from "react";
import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css"
import CartContext from "../../store/Cart-context";

const CartButton = props => {
    const cartCtx = useContext(CartContext);
    const {items} = cartCtx
    const numberOfCartItems = items.reduce((curNumber, item) => {
        return curNumber+item.amount;
    }, 0);
    const [highlightButton, setHighlightButton] = useState(false);
    const btnClasses = `${classes.button} ${highlightButton ? classes.bump : ""}`;

    useEffect(() => {
        if (items.length === 0){
            return ;
        }
        setHighlightButton(true);
        const timer = setTimeout(() => {
            setHighlightButton(false);
        }, 300);

        return () => {
            clearTimeout(timer);
        }
    }, [items])


    return (
        <button className = {btnClasses} onClick = {props.onCartClick}>
            <span className = {classes.icon}>
                <CartIcon />
            </span>
            <span>Your Cart</span>
            <span className={classes.badge}>
                {numberOfCartItems}
            </span>
        </button>
    );
}

export default CartButton