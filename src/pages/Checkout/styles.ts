import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  width: 100%;
  margin-bottom: 40px;

  > form {
    height: 100%;
    width: min(100%, 600px);

    margin: 3rem auto 0;

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
        justify-content: space-between;
      }

      > div {
        display: flex;

        > div {
          position: relative;
          display: flex;
          width: 75%;

          & + div {
            flex: 1;
            margin-left: 10px;
          }

          > input {
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

          > input ~ label {
            position: absolute;
            top: 12px;
            left: 0;
            color: var(--color-text-primary);
            transition: 0.4s;
            pointer-events: none;
          }

          > input:focus ~ label,
          > input:valid ~ label {
            transform: translateY(-24px);
            font-size: 0.8em;
            letter-spacing: 0.1em;
          }
        }
      }
    }

    > fieldset + fieldset {
      margin-top: 6.4rem;
    }

    > div {
      width: 100%;
      padding: 6.4rem 2.4rem;

      > button {
        background: var(--color-primary);
        color: #fff;
        font-weight: 500;
        width: 100%;
        padding: 16px;
        margin: 0 auto;
        text-align: center;
      }
    }
  }
`;
