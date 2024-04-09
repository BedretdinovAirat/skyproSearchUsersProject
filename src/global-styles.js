import { createGlobalStyle } from "styled-components"

export const GlobalStyles = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  *:before,
  *:after {
    box-sizing: border-box;
  }

  @font-face {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    src: url('https://fonts.googleapis.com/css2?family=Roboto:wght@400&display=swap');
  }
  
  a {
    text-decoration: none;
    cursor: pointer;
    font-family: "Roboto", sans-serif;

  }
  
  
  ul li {
    list-style: none;
    font-family: "Roboto", sans-serif;

  }
  
  html,
  body {
    width: 100%;
    height: 100%;
    color: #000000;
    font-family: "Roboto", sans-serif;
  }
 `
