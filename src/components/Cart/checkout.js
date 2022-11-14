import { useRef, useState } from "react";
import classes from "./checkout.module.css"

const Checkout = (props) => {

    const [showerror, seterror] = useState(false)
    const [isvalid, setValid] = useState({
        name:false, 
        street:false, 
        city:false,
        postal:false
    });

    const [isFocussed, setFocus] = useState({
        name:false,
        street:false,
        city:false,
        postal:false
    })

    const nameinputref = useRef();
    const streetinputref = useRef();
    const cityinputref = useRef();
    const postalinputref= useRef();

    


    const changeHandler = (e) => {
        const fieldname = e.target.name;
        const fieldValue = e.target.value;
        console.log(fieldValue)
        if (fieldValue.trim() !== ''){
            setValid({...isvalid, [fieldname]:true})
        } else {
            setValid({...isvalid,[fieldname]:false})
        }
        
    }

    const focusHandler = (e) => {
        
        
        setFocus({...isFocussed, [e.target.name]:true})
        
    }




    const submitHandler = (event) => {
        event.preventDefault();
        const name = nameinputref.current.value;
        const street = streetinputref.current.value;
        const city = cityinputref.current.value;
        const postal = postalinputref.current.value;
        if (isvalid.name && isvalid.street && isvalid.city && isvalid.postal){
            props.onsubmit({
                name,
                street,
                city,
                postal
            })
        } else {
           seterror(true);
           
        }
    };

    return (
        <form className = {classes.form} onSubmit={submitHandler}>
            {showerror?<p className={classes.error}>Please enter valid details</p>:null}
            <div className={`${classes.control} ${!isvalid.name && isFocussed.name && classes.invalid}`}>
                <label htmlFor="name">Your Name</label>
                <input ref = {nameinputref} type="text" id="name" name = "name" onChange = {changeHandler} onBlur = {focusHandler}/>
            </div>
            <div className={`${classes.control} ${!isvalid.street && isFocussed.street ? classes.invalid:null}`}>
                <label htmlFor="Street">Street</label>
                <input ref = {streetinputref} type="text" id="street" name = "street" onChange = {changeHandler} onBlur = {focusHandler}/>
            </div>
            <div className={`${classes.control} ${!isvalid.city && isFocussed.city ? classes.invalid:null}`}>
                <label htmlFor="city">City</label>
                <input ref = {cityinputref} type="text" id="city" name = "city" onChange = {changeHandler} onBlur = {focusHandler}/>
            </div>
            <div className={`${classes.control} ${!isvalid.postal && isFocussed.postal ? classes.invalid:null}`}>
                <label htmlFor="code">PinCode</label>
                <input ref = {postalinputref} type="text" id="code" name = "postal" onChange = {changeHandler} onBlur = {focusHandler}/>
            </div>
            <div className={classes.actions}>
                <button type="submit" onClick={props.onCancel}>Cancel</button>
                <button className={classes.submit}>Submit</button>
            </div>
        </form>
    )
}

export default Checkout