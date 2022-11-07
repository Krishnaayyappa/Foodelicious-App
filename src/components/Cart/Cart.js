import classes from "./Cart.module.css"
import Modal from "../UI/Modal";
import { useContext, useState } from "react";
import CartContext from "../../store/Cart-context";
import CartItem from "./CartItem";
import Checkout from "./checkout";



const Cart = (props) => {
    const cartCtx = useContext(CartContext);
    const [checkout, setCheckout] = useState(false);
    const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
    const hasItems = cartCtx.items.length>0;

    const sendData = (data) => {
        fetch("https://food-data-aff7b-default-rtdb.firebaseio.com/orders.json",
        {
            method: "post",
            headers: {
                'Content-Type':'application/json'
            },
            body: JSON.stringify({details:data, items:cartCtx.items})

        })
    }
    
    const cartItemRemoveHandler = (id) => {
        cartCtx.removeItem(id);
    };

    const cartItemAddHandler = (item) => {
        cartCtx.addItem({...item,amount:1});
    };

    const handleOrder = () => setCheckout(true);

    const orderCancel = <div className={classes.actions}>
                            {!hasItems && <p>There are no items in the cart</p>}
                            <button className={classes["button--alt"]} onClick = {props.onCancel}>Close</button>
                            {hasItems && <button onClick = {handleOrder} className={classes.button}>Order</button>}
                        </div>
    

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
            {checkout && <Checkout onsubmit = {sendData} onCancel = {props.onCancel}/>}
            {!checkout && orderCancel}
        </Modal>
    );
};


export default Cart