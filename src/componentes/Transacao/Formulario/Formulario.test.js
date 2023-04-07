import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Formulario from '.';

describe('Deve renderizar um campo de input ', () => {
  test('no documento', () => {
    render(<Formulario />);
    const campoText = screen.getByPlaceholderText('Digite um valor');
    expect(campoText).toBeInTheDocument();
  });

  test('com type number', () => {
    render(<Formulario />);
    const campoTextTypeNumber = screen.getByPlaceholderText('Digite um valor');
    expect(campoTextTypeNumber).toHaveAttribute('type', 'number');
  });

  test('que pode ser preenchido', () => {
    render(<Formulario />);
    const campoTexto = screen.getByPlaceholderText('Digite um valor');
    userEvent.type(campoTexto, '50');
    expect(campoTexto).toHaveValue(50);
  });
});

test('Deve chamar um evento de onSubmit ao clicar em realizar transacao', () => {
  const realizarTransacao = jest.fn();

  render(<Formulario realizarTransacao={realizarTransacao} />);
  const botao = screen.getByRole('button');

  userEvent.click(botao);
  expect(realizarTransacao).toHaveBeenCalledTimes(1);
});
