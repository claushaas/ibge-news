import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import App from './App.tsx';
import store from './redux/index.ts';
import GlobalStyle from './GlobalStyle';
import theme from './assets/styledTheme';

ReactDOM.createRoot(document.getElementById('root') as Element).render(
  <React.StrictMode>
    <Provider store={ store }>
      <BrowserRouter>
        <ThemeProvider theme={ theme }>
          <GlobalStyle />
          <App />
        </ThemeProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
);
