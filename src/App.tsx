import React, { FC } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import GlobalStyle from './styles/global';

import Routes from './routes';

const App: FC = () => (
  <Router>
    <GlobalStyle />
    <Routes />
  </Router>
);

export default App;
