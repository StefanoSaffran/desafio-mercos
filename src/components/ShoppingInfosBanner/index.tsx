import React from 'react';
import { MdLocalShipping, MdLocalOffer, MdPayment } from 'react-icons/md';

import { Container, Content, InfoItem } from './styles';

const ShoppingInfosBar: React.FC = () => {
  return (
    <Container>
      <Content>
        <InfoItem>
          <MdLocalShipping size={20} />
          Delivery apenas para Joinville
        </InfoItem>

        <InfoItem>
          <MdLocalOffer size={20} />
          Desconto de 10% nas compras acima de R$ 200,00
        </InfoItem>

        <InfoItem>
          <MdPayment size={20} />
          Pague em até 12x no cartão
        </InfoItem>
      </Content>
    </Container>
  );
};

export default ShoppingInfosBar;
