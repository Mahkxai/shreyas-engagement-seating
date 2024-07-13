import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Heuristica&display=swap');

  @font-face {
    font-family: 'OPTIBakerDanmarkOne';
    src: url('/src/assets/fonts/OPTIBakerDanmarkOne.ttf.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }

  body {
    font-family: 'OPTIBakerDanmarkOne', sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: #fafafa;
	// text-shadow: 0px 0px 1px rgba(0, 0, 0, 0.8); /* Add a subtle text shadow for contrast */
  }
`;

export default GlobalStyles;
