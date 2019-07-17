import React from "react";
import styled from "styled-components/macro";

import logo from "./logo.svg";

const StyledBox = styled.div`
  background-color: red;
  height: 20px;
  width: 20px;
`;

function App() {
  return (
    <div className="App">
      <header>
        <StyledBox />
      </header>
    </div>
  );
}

export default App;
