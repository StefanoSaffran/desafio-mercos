import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  width: 100%;

  h1 {
    text-align: center;
    font-weight: 500;
    color: var(--color-text-primary);
    margin: 30px 0;
  }
`;

export const CartWrapper = styled.div`
  height: 100%;
  width: min(100%, 1070px);

  margin: 0 auto;

  display: flex;
`;

export const CartList = styled.ul`
  flex: 1;
`;

export const Summary = styled.div`
  width: 320px;
  border: 1px solid var(--color-border);

  > header {
    padding: 15px 18px;
    border-bottom: 1px solid var(--color-border);

    > span {
      font-size: 1.4rem;
      font-weight: 500;
      text-transform: uppercase;
    }
  }
`;

export const Details = styled.div`
  padding: 14px 18px 18px;

  > button {
    background: var(--color-primary);
    color: #fff;
    font-weight: 500;
    width: 100%;
    padding: 16px;
    text-align: center;
  }
`;

export const DetailsItem = styled.div`
  font-size: 1.4rem;
  color: var(--color-text-secondary);

  display: flex;
  align-items: center;
  justify-content: space-between;

  margin: 13px 0;
  line-height: 1.25;

  span + span {
    font-weight: 500;
  }
`;

export const Total = styled.div`
  color: var(--color-text-primary);
  font-weight: bold;

  display: flex;
  align-items: center;
  justify-content: space-between;

  margin: 30px 0 25px;
`;
