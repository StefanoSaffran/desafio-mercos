import React, { FC } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import GlobalStyle from './styles/global';

import AppProvider from './context';
import Routes from './routes';

const App: FC = () => (
  <Router>
    <AppProvider>
      <GlobalStyle />
      <Routes />
    </AppProvider>
  </Router>
);

export default App;
