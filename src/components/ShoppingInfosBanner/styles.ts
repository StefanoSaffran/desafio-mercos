import styled from 'styled-components';

export const Container = styled.div`
  background: var(--color-background-banner);

  height: 100px;
  width: 100%;
  padding: 10px 0;

  @media (min-width: 725px) {
    height: 60px;
    padding: 0;
  }
`;

export const Content = styled.div`
  width: min(100%, 900px);
  height: 100%;
  margin: 0 auto;
  padding: 0 20px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;

  @media (min-width: 725px) {
    flex-direction: row;
  }
`;

export const InfoItem = styled.span`
  display: flex;
  align-items: center;

  font-size: 1.2rem;
  font-weight: 500;

  > svg {
    margin-right: 5px;
    color: var(--color-text-banner);
  }

  &:nth-child(2) {
    order: -1;
  }

  @media (min-width: 725px) {
    &:nth-child(2) {
      order: 0;
    }
  }
`;
