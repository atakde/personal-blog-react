import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";
import { createGlobalStyle } from "styled-components";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./containers/Home";

const GlobalStyle = createGlobalStyle`
  body {
    background: #0b174e;
    font-size: 18px;
    font-family: "Open Sans", sans-serif;
    word-break: break-word;
    background: #0b174e;
    text-align: center;
    color: white;
  }
`;

function App() {
  return (
    <React.Fragment>
      <GlobalStyle />
      <Header />
      <Main>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Main>
      <Footer />
    </React.Fragment>
  );
}

export default App;
