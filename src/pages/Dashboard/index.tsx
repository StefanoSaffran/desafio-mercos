import React from 'react';

import Header from '../../components/Header';
import CartItem from '../../components/CartItem';
import ShoppingInfosBanner from '../../components/ShoppingInfosBanner';

import {
  Container,
  CartWrapper,
  CartList,
  Summary,
  Details,
  DetailsItem,
  Total,
} from './styles';

const Dashboard: React.FC = () => {
  return (
    <Container>
      <Header />

      <ShoppingInfosBanner />

      <h1>Carrinho</h1>

      <CartWrapper>
        <CartList>
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
        </CartList>

        <Summary>
          <header>
            <span>Resumo do pedido</span>
          </header>

          <Details>
            <DetailsItem>
              <span>Itens</span>
              <span>5</span>
            </DetailsItem>
            <DetailsItem>
              <span>Total em produtos</span>
              <span>R$ 62,50</span>
            </DetailsItem>
            <DetailsItem>
              <span>Descontos</span>
              <span>R$ 0,00</span>
            </DetailsItem>

            <Total>
              <span>Total</span>
              <span>R$ 10,00</span>
            </Total>

            <button type="button">Finalizar a compra</button>
          </Details>
        </Summary>
      </CartWrapper>
    </Container>
  );
};

export default Dashboard;
