import { createGlobalStyle } from 'styled-components';
export const GlobalStyles = createGlobalStyle`



body {
  margin: 0;
  font-family: Manrope, sans-serif;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}

.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 1200;
}

.modal {
  max-width: calc(100vw - 48px);
  max-height: calc(100vh - 24px);
}
`;
