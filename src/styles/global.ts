import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus {
    outline: 0;
    box-shadow: 0 0 0 2px ${(props) => props.theme.primary};
    border-radius: 4px;
  }

  body {
    min-height: 100vh;
    min-width: 100vw;
    background-color: ${(props) => props.theme.background};
    color: ${(props) => props.theme['base-text']};
    -webkit-font-smoothing: antialiased;  
  }

  body, input, textarea, button {
    font-family: ${(props) => props.theme.roboto};
    font-weight: 400;
    font-size: 1rem;
  }   
  
  @media (max-width: 768px) {
    html {
      font-size: 87.5%;
    }  
  }
`
