import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { useHistory } from 'react-router-dom';

import Header from '../../components/Header';
import CartItem from '../../components/CartItem';
import ShoppingInfosBanner from '../../components/ShoppingInfosBanner';

import { useCart } from '../../context/cart';

import api from '../../services/api';
import { formatNumber } from '../../utils/format';

import {
  Container,
  CartWrapper,
  CartList,
  Summary,
  Details,
  DetailsItem,
  Total,
} from './styles';

export interface IProduct {
  id: number;
  sku: string;
  quantidade: number;
  nome: string;
  valor_unitario: number;
  url_imagem: string;
  observacao: string;
}

export interface IDiscount {
  desconto_percentual: number;
  tipo: string;
  valor: number;
}

const Dashboard: React.FC = () => {
  const history = useHistory();

  const {
    products,
    currentDiscount,
    productsPrice,
    totalPrice,
    addToCart,
    addDiscounts,
  } = useCart();

  useEffect(() => {
    const promiseProducts = api.get<IProduct[]>('carrinho');
    const promiseDiscounts = api.get('politicas-comerciais');

    Promise.all([promiseProducts, promiseDiscounts]).then(response => {
      addDiscounts(response[1].data);
      addToCart(response[0].data);
    });
  }, [addToCart, addDiscounts]);

  const handleGoToCheckoutPage = useCallback(() => history.push('/checkout'), [
    history,
  ]);

  return (
    <Container>
      <Header total={formatNumber(totalPrice)} />

      <ShoppingInfosBanner />

      <h1>Carrinho</h1>

      <CartWrapper>
        <CartList>
          {!products.length ? (
            <h1>Carrinho vazio</h1>
          ) : (
            products.map(product => (
              <CartItem key={product.id} product={product} />
            ))
          )}
        </CartList>

        <Summary>
          <header>
            <span>Resumo do pedido</span>
          </header>

          <Details>
            <div>
              <DetailsItem>
                <span>Itens</span>
                <span>{products.length}</span>
              </DetailsItem>
              <DetailsItem>
                <span>Total em produtos</span>
                <span>{formatNumber(productsPrice)}</span>
              </DetailsItem>
              <DetailsItem>
                <span>Descontos</span>
                <span>{formatNumber(currentDiscount)}</span>
              </DetailsItem>
            </div>

            <Total>
              <span>Total</span>
              <span>{formatNumber(totalPrice)}</span>
            </Total>

            <button type="button" onClick={handleGoToCheckoutPage}>
              Finalizar a compra
            </button>
          </Details>
        </Summary>
      </CartWrapper>
    </Container>
  );
};

export default Dashboard;
