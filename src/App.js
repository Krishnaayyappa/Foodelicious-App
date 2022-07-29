import React, { Fragment } from "react";
import Header from "./components/Layout/Header.js"
import Meals from "./components/Meals/Meals.js";

function App() {
  return (
    <Fragment>
      <Header />
      <Meals />
    </Fragment>
  );
}

export default App;
