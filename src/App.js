import React, { Fragment, useState } from "react";
import Cart from "./components/Cart/Cart.js";
import Header from "./components/Layout/Header.js"
import Meals from "./components/Meals/Meals.js";

function App() {
  const [showCart, setShowCart] = useState(false);
  
  function handleShowCart(){
    setShowCart(true);
  }

  function handleHideCart(){
    setShowCart(false);
  }

  return (
    <Fragment>
      {showCart && <Cart onCancel = {handleHideCart}/>}
      <Header onCartClick = {handleShowCart}/>
      <main>
        <Meals />
      </main>
    </Fragment>
  );
}

export default App;
