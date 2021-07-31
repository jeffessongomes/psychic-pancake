import { createGlobalStyle } from "styled-components";

import Bg from "../assets/img/bg.png";

export default createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    outline: 0;
  }
  body {
    background: #383A3C;
    color: #FFF;
    -webkit-font-smoothing: antialiased;
  }

  #root{
    background: url(${Bg});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    min-height: 100vh;
  }

  button{
    cursor: pointer;
  }
`;
