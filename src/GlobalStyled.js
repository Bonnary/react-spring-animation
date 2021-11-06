import { createGlobalStyle } from "styled-components";

const Styles = createGlobalStyle`
*{
    margin: 0;
}

body{
    width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
`;

export default Styles;