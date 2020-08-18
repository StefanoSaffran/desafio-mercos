import styled from 'styled-components';

export const Container = styled.header`
  height: 161px;
  width: 100%;

  border-bottom: 1px solid var(--color-border);
  position: sticky;
`;

export const Content = styled.div`
  height: 100%;
  width: min(100%, 1180px);
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Info = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-top: 20px;
  font-size: 1.2rem;

  color: var(--color-text-primary);

  > span {
    display: flex;
    align-items: center;

    > svg {
      margin-right: 5px;
    }
  }
`;

export const User = styled.div`
  display: flex;

  > div {
    display: flex;
    align-items: center;

    > svg {
      margin-right: 5px;
    }
  }

  > div:first-child {
    margin-right: 20px;
  }
`;

export const Nav = styled.nav`
  flex: 1;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;

  margin-bottom: 10px;
  font-size: 1.4rem;
  line-height: 25px;
  font-weight: bold;
  letter-spacing: 0.1px;

  > div {
    display: flex;
    align-items: center;

    > a {
      display: none;
      color: var(--color-text-primary);
      text-transform: uppercase;
    }

    > a + a {
      margin-left: 30px;
    }

    > svg {
      margin-right: 5px;
    }
  }

  > div:nth-child(2) {
    width: min(50%, 380px);
  }

  > div:last-child {
    > svg {
      color: var(--color-primary);
    }
  }

  @media (min-width: 740px) {
    > div {
      > a {
        display: block;
      }
    }
  }
`;

export const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: -80px;

  img {
    margin-bottom: 4px;
  }
`;
