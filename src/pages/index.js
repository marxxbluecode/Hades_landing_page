import React from "react";
import { Helmet } from "react-helmet";
import { createGlobalStyle } from "styled-components";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Main } from "../components/Main";
import dark from "../images/dark_geometric.png";
import ammo from "../images/Ammo.ico";

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
*{
  padding:0;
  margin:0;
  box-sizing:border-box;
  font-family: 'Roboto', sans-serif;
}
body{
  background-image: url(${dark});
  background-size: auto;
  background-repeat: repeat;
  overflow-x: hidden;
  background-color: #2e2f34;
}
`

export default function Index() {
    return (
      <div>
        <Helmet>
          <img src={ammo} alt="icon"/><title>Hades</title>
        </Helmet>
        <GlobalStyle/>
        <Header/>
        <Main/>
        <Footer/>
      </div>
    )
  }
