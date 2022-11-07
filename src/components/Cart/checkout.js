import { useRef } from "react";
import classes from "./checkout.module.css"

const Checkout = (props) => {

    const nameinputref = useRef();
    const streetinputref = useRef();
    const cityinputref = useRef();
    const postalinputref= useRef();



    const submitHandler = (event) => {
        event.preventDefault();
        const name = nameinputref.current.value;
        const street = streetinputref.current.value;
        const city = cityinputref.current.value;
        const postal = postalinputref.current.value;
        props.onsubmit({
            name,
            street,
            city,
            postal
        })
    };

    return (
        <form className = {classes.form} onSubmit={submitHandler}>
            <div className={classes.control}>
                <label htmlFor="name">Your Name</label>
                <input ref = {nameinputref} type="text" id="name"/>
            </div>
            <div className={classes.control}>
                <label htmlFor="Street">Street</label>
                <input ref = {streetinputref} type="text" id="street"/>
            </div>
            <div className={classes.control}>
                <label htmlFor="city">City</label>
                <input ref = {cityinputref} type="text" id="city"/>
            </div>
            <div className={classes.control}>
                <label htmlFor="code">PinCode</label>
                <input ref = {postalinputref} type="text" id="code"/>
            </div>
            <div className={classes.actions}>
                <button type="submit" onClick={props.onCancel}>Cancel</button>
                <button className={classes.submit}>Submit</button>
            </div>
            
        </form>
    )
}

export default Checkout