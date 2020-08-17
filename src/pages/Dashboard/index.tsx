import React from 'react';

import Header from '../../components/Header';
import ShoppingInfosBanner from '../../components/ShoppingInfosBanner';

import { Container } from './styles';

const Dashboard: React.FC = () => {
  return (
    <Container>
      <Header />

      <ShoppingInfosBanner />
    </Container>
  );
};

export default Dashboard;
