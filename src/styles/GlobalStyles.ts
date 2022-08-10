import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;1,300;1,400;1,500&display=swap');
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Open Sans', sans-serif;

    
}

.container{
    margin: 0 auto;
    width: 100%;
    max-width: 100%;
    padding: 0 20px;
}
  
  button{
    border: none;
    outline: none;
  }
  
`;

export default GlobalStyle;
