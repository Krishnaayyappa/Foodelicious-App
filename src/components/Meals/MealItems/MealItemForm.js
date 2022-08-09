import Input from "../../UI/Input";
import classes from "./MealItemForm.module.css";
import {useRef, useState} from "react";


const MealItemForm = props => {
    const [validAmount, setValidAmount] = useState(true)
    const inputRef = useRef();
    const submitHandler = event => {
        event.preventDefault();
        const amountValue = inputRef.current.value;
        const amountValueNumber = +amountValue;
        if (amountValue.trim().length === 0 || amountValueNumber < 1 || amountValueNumber > 5) {
            setValidAmount(false)
            return;
        }
        props.addAmount(amountValueNumber);
    }    


    return (
        <form className={classes.form} onSubmit = {submitHandler}> 
            <Input ref = {inputRef} label = "Amount" input = {{
                id:"Amount_" + props.id,
                type:"number",
                min: "1",
                max:"5",
                step: "1",
                defaultValue: "1"

            }}/>
            <button>+Add</button>
            {!validAmount && <p>please enter the valid amount</p>}
        </form>
    );
}

export default MealItemForm