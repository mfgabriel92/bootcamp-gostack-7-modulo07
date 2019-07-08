import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    background: #241f33;
    -webkit-font-smoothing: antialiased;
    -webkit-font-smoothing: antialiased;
    -ms-font-smoothing: antialiased;
  }

  body, input, button {
    font: 14px Roboto, sans-serif;
    color: #fafafa;
  }

  button {
    cursor: pointer;

    &:disabed {
      cursor: not-allowed;
    }
  }

  #root {
    max-width: 1024px;
    margin: 0 auto;
    padding: 0 20px 50px;
  }
`
