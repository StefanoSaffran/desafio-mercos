import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  width: 100%;
  margin-bottom: 40px;

  h1 {
    text-align: center;
    font: 500 3.2rem Montserrat;
    line-height: 40px;
    letter-spacing: -1.5px;
    color: var(--color-text-primary);
    margin: 30px 0;
  }
`;

export const CartWrapper = styled.div`
  height: 100%;
  width: min(100%, 1080px);

  margin: 0 auto;

  display: flex;
`;

export const CartList = styled.ul`
  flex: 1;
  margin-right: 70px;
  margin-bottom: 40px;
`;

export const Summary = styled.div`
  width: 320px;
  height: fit-content;

  border: 1px solid var(--color-border);

  > header {
    padding: 10px 20px;
    border-bottom: 1px solid var(--color-border);
    color: var(--color-text-primary);

    > span {
      font-size: 1.4rem;
      font-weight: bold;
      line-height: 25px;
      letter-spacing: 0.1px;
      text-transform: uppercase;
    }
  }
`;

export const Details = styled.div`
  padding: 20px;

  > div {
    div:first-child {
      margin-top: 6px;
    }

    div + div {
      margin-top: 11px;
    }
  }

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
  letter-spacing: 0.1px;

  color: var(--color-text-secondary);

  display: flex;
  align-items: center;
  justify-content: space-between;

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
