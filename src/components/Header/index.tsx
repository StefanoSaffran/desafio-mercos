import React from 'react';
import { FaWhatsapp, FaUserAlt, FaMapMarkerAlt } from 'react-icons/fa';
import { IoMdCart, IoIosMenu } from 'react-icons/io';

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
              <FaUserAlt size={14} />
              Arethusa
            </div>
            <div>
              <FaMapMarkerAlt size={14} />
              Bom Retiro - Joinville, SC
            </div>
          </User>
        </Info>
        <Nav>
          <div>
            <IoIosMenu size={23} />
            <a href="/">Setores</a>
            <a href="/">Ofertas</a>
          </div>

          <SearchContainer>
            <img src={logo} alt="Logo empresa" />
            <Input name="search" placeholder="O que você procura?" />
          </SearchContainer>

          <div>
            <IoMdCart size={23} />
            R$ 1.050,25
          </div>
        </Nav>
      </Content>
    </Container>
  );
};

export default Header;
