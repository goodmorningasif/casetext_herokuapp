import React from "react";
import Navigation from "./components/Navigation";
import ProductInfo from "./components/ProductInfo";
import CallToAction from "./components/CallToAction";
import { BaseApp } from "./components/App.style";

function App() {
  return (
    <BaseApp>
      <Navigation />
      <ProductInfo />
      <CallToAction />
    </BaseApp>
  );
}

export default App;
