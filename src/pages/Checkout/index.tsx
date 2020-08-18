import React, { FC, useState, useCallback, FormEvent } from 'react';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import NumberFormat from 'react-number-format';

import Header from '../../components/Header';
import Input from '../../components/Input';

import { useCart } from '../../context/cart';
import { formatNumber } from '../../utils/format';

import { Container } from './styles';
import api from '../../services/api';

const Checkout: FC = () => {
  const [street, setStreet] = useState('');
  const [neighborhood, setNeighborhood] = useState('');
  const [addressNumber, setAddressNumber] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [cvc, setCvc] = useState('');

  const history = useHistory();

  const { products, totalPrice } = useCart();

  const handleChangeValue = useCallback(async (values, field) => {
    if (field === 'cvc') {
      setCvc(values.value);
      return;
    }

    setCardNumber(values.value);
  }, []);

  const handleSubmit = useCallback(
    async (event: FormEvent) => {
      event.preventDefault();

      try {
        const itens = products.map(({ id, quantidade, observacao }) => ({
          id,
          quantidade,
          observacao,
        }));

        /*     const config = {
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
      }; */

        const data = {
          itens,
          endereco: {
            rua: street,
            bairro: neighborhood,
            numero: addressNumber,
          },
          cartao: {
            numero: cardNumber,
            cvc,
          },
        };

        await api.post('carrinho', data);

        toast.success(
          'Compra finalizada! Obrigado pela preferência, volte sempre!',
          {
            position: 'top-right',
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          },
        );
      } catch (error) {
        toast.error('Ocorreu um erro no servidor, tente novamente!', {
          position: 'top-right',
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    },
    [addressNumber, cardNumber, cvc, neighborhood, products, street],
  );

  return (
    <Container>
      <Header total={formatNumber(totalPrice)} />

      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend>Endereço</legend>

          <Input
            required
            name="street"
            label="Rua"
            value={street}
            onChange={({ target }) => setStreet(target.value)}
          />
          <Input
            required
            name="neighborhood"
            label="Bairro"
            value={neighborhood}
            onChange={({ target }) => setNeighborhood(target.value)}
          />
          <Input
            required
            type="number"
            name="number"
            label="Número"
            value={addressNumber}
            onChange={({ target }) => setAddressNumber(target.value)}
          />
        </fieldset>

        <fieldset>
          <legend>Pagamento</legend>

          <div>
            <div>
              <NumberFormat
                required
                autoComplete="off"
                id="cartao"
                name="cartao"
                allowNegative={false}
                format="#### #### #### ####"
                mask="_"
                value={cardNumber}
                onValueChange={values => handleChangeValue(values, 'card')}
              />
              <label htmlFor="cartao">Número do cartão</label>
            </div>

            <div>
              <NumberFormat
                required
                id="cvc"
                name="cvc"
                autoComplete="off"
                allowNegative={false}
                label="Código CVC"
                format="###"
                value={cvc}
                onValueChange={values => handleChangeValue(values, 'cvc')}
              />
              <label htmlFor="cvc">Código CVC</label>
            </div>
          </div>
        </fieldset>

        <div>
          <button type="submit">Confirmar</button>
        </div>
      </form>
    </Container>
  );
};

export default Checkout;
