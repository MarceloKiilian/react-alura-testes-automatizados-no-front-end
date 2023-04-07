import { render, screen } from '@testing-library/react';
import Menu from './index';

test('Deve renderizar um link para a pagina inicial', () => {
  render(<Menu />);
  const linkPaginaInicial = screen.getByText('Inicial');
  expect(linkPaginaInicial).toBeInTheDocument();
});

test('Deve renderizar uma lista de link', () => {
  render(<Menu />);
  const listaDeLinks = screen.getAllByRole('link');
  expect(listaDeLinks).toHaveLength(4);
});

test('Não deve reinderizar o link para extrado', () => {
  render(<Menu />);
  const linkExtrato = screen.queryByTestId('Extrato');
  expect(linkExtrato).not.toBeInTheDocument();
});

test('Deve renderizar uma lista de link com a classe link', () => {
  render(<Menu />);
  const links = screen.getAllByRole('link');
  links.forEach((link) => expect(link).toHaveClass('link'));
  expect(links).toMatchSnapshot();
});
