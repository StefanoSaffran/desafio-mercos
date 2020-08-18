import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { MdPlace, MdPerson, MdMenu, MdShoppingCart } from 'react-icons/md';

import Input from '../Input';

import logo from '../../assets/logo.png';

import { Container, Content, Info, User, Nav, SearchContainer } from './styles';

const Header: React.FC = () => {
  return (
    <Container>
      <Content>
        <Info>
          <span>
            <FaWhatsapp size={20} /> (47) 9999-9999
          </span>
          <User>
            <div>
              <MdPerson size={20} />
              Arethusa
            </div>
            <div>
              <MdPlace size={20} />
              Bom Retiro - Joinville, SC
            </div>
          </User>
        </Info>
        <Nav>
          <div>
            <MdMenu size={25} />
            <a href="/">Setores</a>
            <a href="/">Ofertas</a>
          </div>

          <SearchContainer>
            <img src={logo} alt="Logo empresa" />
            <Input name="search" placeholder="O que você procura?" />
          </SearchContainer>

          <div>
            <MdShoppingCart size={25} />
            R$ 62,50
          </div>
        </Nav>
      </Content>
    </Container>
  );
};

export default Header;
