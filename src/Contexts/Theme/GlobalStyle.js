import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    font-family: ${props => props.theme.fonts.primary};
    overflow-x: hidden;
    &::-webkit-scrollbar {
      display: none;
    }
  }

div {
    box-sizing: border-box;
}

  h1, h2, h3, h4, h5, h6, th {
    line-height: 1;
    font-family: ${props => props.theme.fonts.primary};
  }

  p, span, td, div {
    font-family: ${props => props.theme.fonts.secondary};
    margin: 0;
  }

  h1 {
    margin-bottom: 2em;
    font-size: 1.2em;
    @media screen and (min-width: 500px) {
        font-size: 1.7em;
    }
    @media screen and (min-width: 1200px) {
        font-size: 2em;
    }
    @media screen and (min-width: 1400px) {
        font-size: 3em;
    }
  }

  button:focus {
    outline: none;
}

  .show {
    visibility: visible;
  }

  .hide {
    visibility: hidden;
  }
`

export default GlobalStyle
