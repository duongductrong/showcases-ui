import React from "react";
import { createGlobalStyle } from "styled-components";
import Cursor from "./components/Cursor/Cursor";
import Home from "./pages/Home";

const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap');

body {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: "Inter";
  background-color: 
    ${(props) => props.theme.primary}
  ;

  width: 100%;
  height: 100vh;
  color: ${(props) => props.theme.white};

  overflow: hidden;
}
`;

function App() {
  return (
    <div>
      <GlobalStyles />
      <Home />
      <Cursor />
    </div>
  );
}

export default App;
