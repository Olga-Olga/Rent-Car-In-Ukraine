import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
import { Provider } from 'react-redux';
import { store } from 'redux/store';
import { ThemeProvider } from 'styled-components';
import { theme } from 'components/styles/theme';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter basename="/Rent-Car-In-Ukraine">
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <App />
      </Provider>
      <ToastContainer autoClose="600" />
    </ThemeProvider>
  </BrowserRouter>
);
