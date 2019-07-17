import React from "react";
import Navigation from "./Navigation";
import Body from "./Body";
import CallToAction from "./CallToAction";
import { BaseApp } from "./App.style";

function App() {
  return (
    <BaseApp>
      <Navigation />
      <Body />
      <CallToAction />
    </BaseApp>
  );
}

export default App;
