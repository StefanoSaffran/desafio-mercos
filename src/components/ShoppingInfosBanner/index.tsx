import React from 'react';
import { FaTruck, FaTag } from 'react-icons/fa';
import { IoMdCard } from 'react-icons/io';

import { Container, Content, InfoItem } from './styles';

const ShoppingInfosBar: React.FC = () => {
  return (
    <Container>
      <Content>
        <InfoItem>
          <FaTruck size={18} />
          Delivery apenas para Joinville
        </InfoItem>

        <InfoItem>
          <FaTag size={18} />
          Desconto de 10% nas compras acima de R$ 200,00
        </InfoItem>

        <InfoItem>
          <IoMdCard size={18} />
          Pague em até 12x no cartão
        </InfoItem>
      </Content>
    </Container>
  );
};

export default ShoppingInfosBar;
