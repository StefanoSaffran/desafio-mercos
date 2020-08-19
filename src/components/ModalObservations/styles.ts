import styled from 'styled-components';

export const Form = styled.form`
  width: 100%;

  > fieldset {
    border: 0;
    padding: 0 2.4rem;

    > legend {
      font: bold 2.4rem Roboto;
      width: 100%;

      margin-bottom: 1.6rem;
      padding-bottom: 1.6rem;
      border-bottom: 1px solid var(--color-border);
      display: flex;
      align-items: center;
    }

    > textarea {
      width: 100%;
      min-height: 8rem;
      max-height: 36rem;
      height: 16rem;
      margin-top: 0.8rem;
      margin-bottom: 1.6rem;
      border-radius: 0.8rem;
      border: 1px solid var(--color-border);
      padding: 1.2rem 1.6rem;
      resize: vertical;
    }

    > button {
      border-radius: 0.2rem;
      background: var(--color-primary);
      color: #fff;
      font-weight: 500;
      width: 100%;
      padding: 16px;
      margin: 0 auto;
      text-align: center;
    }
  }
`;
