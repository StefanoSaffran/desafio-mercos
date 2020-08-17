import styled from 'styled-components';

export const Container = styled.div`
  background: var(--color-background-banner);

  height: 60px;
  width: 100%;
`;

export const Content = styled.div`
  width: min(100%, 900px);
  height: 100%;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: space-between;
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
`;
