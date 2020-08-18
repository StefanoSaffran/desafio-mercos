import React from 'react';
import { MdChatBubbleOutline, MdDelete, MdAdd, MdRemove } from 'react-icons/md';

import { Container, ItemImage, Product, Quantity } from './styles';

const CartItem: React.FC = () => {
  return (
    <Container>
      <ItemImage />

      <Product>
        <p>Nome de Produto XPTO Qualquer - marca TantoFaz</p>

        <span>SKU 1254023653</span>

        <button type="button">
          <MdChatBubbleOutline size={20} />
          Adicionar observação
        </button>
      </Product>

      <Quantity>
        <div>
          <MdRemove size={22} />
          <span>2</span>
          <MdAdd size={22} />
        </div>
      </Quantity>

      <div>
        <span>R$ 12,50</span>
        <button type="button">
          <MdDelete size={20} />
        </button>
      </div>
    </Container>
  );
};

export default CartItem;
