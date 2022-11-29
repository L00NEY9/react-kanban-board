import {createGlobalStyle} from "styled-components";
import {background, textColor} from "../constants/ui";

const globalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html, body, #root {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    font-family: Roboto, sans-serif;
    background: ${background};
    color: ${textColor};
  }

  #root {
    display: flex;
  }

  button, input, textarea {
    font-family: Roboto, sans-serif;
    font-size: 14px;
    border: none;
    cursor: pointer;
    outline: none;
  }
  
  input {
    cursor: text;
  }
`

export default globalStyles
