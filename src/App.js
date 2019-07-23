import React, { PureComponent } from "react";
import Navigation from "./components/Navigation";
import ProductInfo from "./components/ProductInfo";
import CallToAction from "./components/CallToAction";
import { BaseApp } from "./components/App.style";

class App extends PureComponent {
  render() {
    return (
      <BaseApp
        ref={ref => {
          this.ref_BaseApp = ref;
        }}
      >
        <Navigation
          ref={ref => {
            this.ref_Navigation = ref;
          }}
        />
        <ProductInfo
          ref={ref => {
            this.ref_ProductInfo = ref;
          }}
        />
        <CallToAction
          ref={ref => {
            this.ref_CallToAction = ref;
          }}
        />
      </BaseApp>
    );
  }
}

export default App;
