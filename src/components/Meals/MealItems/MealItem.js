import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";
import { useContext } from "react";
import CartContext from "../../../store/Cart-context";


const MealItem = (props) => {
    const cartctx = useContext(CartContext);
    const price = `$${props.price.toFixed(2)}`;
    const handleAddAmount = (amount) => {
        const Items = {
            id: props.id,
            name: props.name,
            price: props.price,
            amount: amount
        };
        cartctx.addItem(Items);
    };
   
    return (
        <li className = {classes.meal}>
            <div>
                <h3>{props.name}</h3>
                <div className={classes.description}>{props.description}</div>
                <div className={classes.price}>{price}</div>
            </div>
            <div>
                <MealItemForm id = {props.id} addAmount = {handleAddAmount}/>
            </div>
        </li>    
    )
}

export default MealItem