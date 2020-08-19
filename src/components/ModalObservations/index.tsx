import React, { useCallback, useState, FormEvent } from 'react';

import { useCart } from '../../context/cart';
import Modal from '../Modal';

import { Form } from './styles';

interface IModalProps {
  isOpen: boolean;
  productId: number;
  setIsOpen: () => void;
}

const ModalObservations: React.FC<IModalProps> = ({
  isOpen,
  productId,
  setIsOpen,
}) => {
  const [observation, setObservation] = useState('');
  const { addObservation } = useCart();

  const handleSubmit = useCallback(
    async (event: FormEvent) => {
      event.preventDefault();

      addObservation(productId, observation);
      setIsOpen();
    },
    [setIsOpen, addObservation, productId, observation],
  );

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <Form onSubmit={handleSubmit}>
        <fieldset>
          <legend>Observações</legend>

          <textarea
            name={observation}
            value={observation}
            onChange={({ target }) => setObservation(target.value)}
          />

          <button type="submit">Adicionar</button>
        </fieldset>
      </Form>
    </Modal>
  );
};

export default ModalObservations;
