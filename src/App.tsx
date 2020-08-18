import React, { FC } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import GlobalStyle from './styles/global';

import AppProvider from './context';
import Routes from './routes';

const App: FC = () => (
  <Router>
    <AppProvider>
      <GlobalStyle />
      <Routes />
      <ToastContainer autoClose={3500} />
    </AppProvider>
  </Router>
);

export default App;
