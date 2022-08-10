import classes from "./Cart.module.css"
import Modal from "../UI/Modal";
import { useContext } from "react";
import CartContext from "../../store/Cart-context";
import CartItem from "./CartItem";



const Cart = (props) => {
    const cartCtx = useContext(CartContext);
    const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
    const hasItems = cartCtx.items.length>0;
    
    const cartItemRemoveHandler = (id) => {

    };

    const cartItemAddHandler = (item) => {

    };

    const cartItems = <ul className={classes["cart-items"]}>{cartCtx.items.map((item) => 
        (<CartItem 
            key = {item.id} 
            name={item.name} 
            price = {item.price} 
            amount = {item.amount}
            onRemove = {cartItemRemoveHandler.bind(null, item.id)}
            onAdd = {cartItemAddHandler.bind(null, item)}
        />))}</ul>;
    return (
        <Modal onClose = {props.onCancel}>
            {cartItems}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>{totalAmount}</span>
            </div>
            <div className={classes.actions}>
                {!hasItems && <p>There are no items in the cart</p>}
                <button className={classes["button--alt"]} onClick = {props.onCancel}>Cancel</button>
                {hasItems && <button className={classes.button}>Order</button>}
            </div>
        </Modal>
    );
};


export default Cart