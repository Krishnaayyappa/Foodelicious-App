import classes from "./Cart.module.css"
import Modal from "../UI/Modal";



const Cart = (props) => {
    const cartItems = <ul className={classes["cart-items"]}>{[{id: 'm1',name: 'Sushi',description: 'Finest fish and veggies',price: 22.99}].map((item) => (<li>{item.name}</li>))}</ul>;
    return (
        <Modal onClose = {props.onCancel}>
            {cartItems}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>50.00</span>
            </div>
            <div className={classes.actions}>
                <button className={classes["button--alt"]} onClick = {props.onCancel}>Cancel</button>
                <button className={classes.button}>Order</button>
            </div>
        </Modal>
    );
};


export default Cart