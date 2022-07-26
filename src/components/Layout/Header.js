import React, { Fragment } from "react";
import mealsImage from "../../assets/meals.jpeg";
import classes from "./Header.module.css";
import CartButton from "./HeaderCartButton";

const Header = props => {
    return (
        <Fragment>
            <header className ={classes.header} >
                <h1>FooDelicious</h1>
                <CartButton />
            </header>
            <div className = {classes["main-image"]}>
                <img src = {mealsImage} alt = "mealsImage" />
            </div>
        </Fragment>
    );
};

export default Header
