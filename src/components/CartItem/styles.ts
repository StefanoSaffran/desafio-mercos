import styled from 'styled-components';

export const Container = styled.li`
  display: flex;
  padding: 0;
  font-size: 1.1rem;
  font-weight: 500;

  border-bottom: 1px solid var(--color-border);

  > div:last-child {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-end;

    width: max(75px, min(95px, 17vw));

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

  @media (min-width: 550px) {
    font-size: 1.4rem;
    padding: 10px 10px 15px;
  }
`;

export const ItemImage = styled.img`
  background: var(--color-background-banner);
  width: max(55px, min(90px, 17vw));
  height: max(55px, min(90px, 17vw));
  margin-right: max(25px, min(40px, 6vw));
  flex-shrink: 0;
`;

export const Product = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;

  font-size: 1.2rem;

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

  @media (min-width: 550px) {
    font-size: 1.4rem;
  }
`;

export const Quantity = styled.div`
  margin: 0 20px;
  font-size: 1.1rem;
  font-weight: 500;
  letter-spacing: 0.1px;

  > div {
    display: flex;
    justify-content: space-between;
    width: 120px;
    width: max(95px, min(120px, 22vw));
    padding: 3px;

    border: 1px solid var(--color-border);
    border-radius: 5px;

    > button {
      background: none;
      height: 22px;

      svg {
        width: 16px;
        height: 16px;
        path {
          color: var(--color-text-banner);
        }
      }
    }

    span + button {
      svg path {
        color: var(--color-primary);
      }
    }
  }

  @media (min-width: 550px) {
    font-size: 1.4rem;

    svg {
      width: 20px;
      height: 20px;
    }
  }
`;
