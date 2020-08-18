import styled from 'styled-components';

export const Container = styled.li`
  display: flex;
  padding: 10px 10px 15px;
  font-size: 1.4rem;
  font-weight: 500;

  border-bottom: 1px solid var(--color-border);

  > div:last-child {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-end;

    width: 95px;

    > button {
      background: none;

      svg {
        path {
          color: var(--color-primary);
        }
      }
    }
  }

  & + li {
    margin-top: 15px;
  }
`;

export const ItemImage = styled.img`
  background: var(--color-background-banner);
  width: 90px;
  height: 90px;
  margin-right: 40px;
  flex-shrink: 0;
`;

export const Product = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;

  > p {
    font-weight: 400;
  }

  > span {
    display: block;
    font-size: 1.2rem;
    font-weight: 500;
    color: var(--color-placeholder);
  }

  > button {
    display: flex;
    align-items: center;

    background: none;
    color: var(--color-primary);
    font-size: 1.2rem;
    font-weight: 500;

    svg {
      margin-right: 5px;
    }
  }
`;

export const Quantity = styled.div`
  margin: 0 20px;
  font-size: 1.4rem;
  font-weight: 500;
  letter-spacing: 0.1px;

  > div {
    display: flex;
    justify-content: space-between;
    width: 120px;
    padding: 3px;

    border: 1px solid var(--color-border);
    border-radius: 5px;

    > button {
      background: none;
      height: 22px;

      svg path {
        color: var(--color-text-banner);
      }
    }

    span + button {
      svg path {
        color: var(--color-primary);
      }
    }
  }
`;
