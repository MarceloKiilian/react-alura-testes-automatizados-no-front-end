import { render, screen } from '@testing-library/react';
import Extrato from '.';

describe('Deve renderizar ', () => {
  test('uma lista de transações', () => {
    const transacoes = [
      {
        transacao: 'Depósito',
        valor: 100,
      },
    ];
    render(<Extrato transacoes={transacoes} />);
    const lista = screen.getByRole('listitem');
    expect(lista).toBeInTheDocument();
  });
});
