import React, { FC, useMemo } from 'react';
import { MdChatBubbleOutline, MdDelete, MdAdd, MdRemove } from 'react-icons/md';

import { IProduct } from '../../pages/Dashboard';
import { formatNumber } from '../../utils/format';
import { useCart } from '../../context/cart';

import { Container, ItemImage, Product, Quantity } from './styles';

interface IProps {
  product: IProduct;
}

const CartItem: FC<IProps> = ({ product }) => {
  const { id, nome, quantidade, url_imagem, sku, valor_unitario } = product;
  const { increment, decrement, removeProduct } = useCart();

  const total = useMemo(() => {
    return formatNumber(quantidade * valor_unitario);
  }, [quantidade, valor_unitario]);

  return (
    <Container>
      <ItemImage src={url_imagem} alt={nome} />

      <Product>
        <p>{nome}</p>

        <span>SKU {sku}</span>

        <button type="button">
          <MdChatBubbleOutline size={20} />
          Adicionar observação
        </button>
      </Product>

      <Quantity>
        <div>
          <button type="button" onClick={() => decrement(id)}>
            <MdRemove size={22} />
          </button>

          <span>{quantidade.toFixed(0)}</span>

          <button type="button" onClick={() => increment(id)}>
            <MdAdd size={22} />
          </button>
        </div>
      </Quantity>

      <div>
        <span>{total}</span>
        <button type="button" onClick={() => removeProduct(id)}>
          <MdDelete size={20} />
        </button>
      </div>
    </Container>
  );
};

export default CartItem;
