import React from "react";
import Navigation from "./components/Navigation";
import Body from "./components/Body";
import CallToAction from "./components/CallToAction";
import { BaseApp } from "./components/App.style";

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
