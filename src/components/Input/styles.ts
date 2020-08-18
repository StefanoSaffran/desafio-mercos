import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  display: flex;
  width: 100%;

  input {
    width: 100%;
    flex: 1;
    -moz-appearance: none;
    -webkit-appearance: none;
    appearance: none;
    padding: 12px 20px 6px 0;
    border: none;
    border-bottom: 1px solid var(--color-text-primary);
    background-color: transparent;
    font-weight: 500;
  }

  svg {
    position: absolute;
    right: 0;
    top: 15px;
    user-select: none;
  }
`;
