import React from "react";
import Nav from "./components/NavBar/Nav";
import Header from "./components/Header/Header";
import GridSystem from './PlayGround/GridSystem'
import ProductContainer from "./components/Products/ProductContainer";

const App = () => {
  return (
    <div>
      <Nav />
      <Header />
      {/* <GridSystem /> */}
      <ProductContainer />
    </div>
  );
};

export default App;
