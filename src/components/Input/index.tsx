import React, { InputHTMLAttributes, FC } from 'react';
import { IoMdSearch } from 'react-icons/io';

import { Container } from './styles';

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
}

const Input: FC<IInputProps> = ({ name, ...rest }) => {
  return (
    <Container>
      <input id={name} {...rest} />
      <IoMdSearch size={20} />
    </Container>
  );
};

export default Input;
