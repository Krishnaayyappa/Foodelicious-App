import React, { useState } from "react";
import Cart from "./components/Cart/Cart.js";
import Header from "./components/Layout/Header.js"
import Meals from "./components/Meals/Meals.js";
import CartProvider from "./store/Cart-provider.js";

function App() {
  const [showCart, setShowCart] = useState(false);
  
  function handleShowCart(){
    setShowCart(true);
  }

  function handleHideCart(){
    setShowCart(false);
  }

  return (
    <CartProvider>
      {showCart && <Cart onCancel = {handleHideCart}/>}
      <Header onCartClick = {handleShowCart}/>
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
};

export default App;
