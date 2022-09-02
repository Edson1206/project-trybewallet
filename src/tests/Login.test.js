import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import App from '../App';
import renderWithRouterAndRedux from './helpers/renderWith';

describe('Login screen', () => {
  const email = 'tryber@teste.com';

  test('checks that the splash screen renders correctly', () => {
    renderWithRouterAndRedux(
      <App />,
    );

    const login = screen.getByText(/login/i);
    expect(login).toBeInTheDocument();
    const emailPlaceholder = screen.getByPlaceholderText('E-mail');
    expect(emailPlaceholder).toBeInTheDocument();
    const passPlaceholder = screen.getByPlaceholderText('Senha');
    expect(passPlaceholder).toBeInTheDocument();
  });
  test('checks if the wallet screen is rendered after logging in with correct data', () => {
    const { history } = renderWithRouterAndRedux(<App />);

    const emailInput = screen.getByTestId(/email-input/i);
    const passInput = screen.getByTestId(/password-input/i);
    const loginButton = screen.getByRole('button', { name: /entrar/i });

    userEvent.type(emailInput, email);
    userEvent.type(passInput, '123456');
    userEvent.click(loginButton);

    expect(history.location.pathname).toBe('/carteira');
  });
});
