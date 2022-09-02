import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouterAndRedux from './helpers/renderWith';
import App from '../App';
import mockData from './helpers/mockData';

describe('Wallet screen', () => {
  beforeEach(() => {
    global.fetch = jest.fn(() => Promise.resolve({
      json: () => Promise.resolve(mockData),
    }));

    renderWithRouterAndRedux(<App />);

    const emailInput = screen.getByTestId(/email-input/i);
    const passInput = screen.getByTestId(/password-input/i);
    const loginButton = screen.getByRole('button', { name: /entrar/i });

    userEvent.type(emailInput, 'tryber@teste.com');
    userEvent.type(passInput, '123456');
    userEvent.click(loginButton);
  });

  test('checks if user email is rendered on screen', () => {
    const userEmail = screen.getByTestId('email-field', { name: 'tryber@teste.com' });
    expect(userEmail).toBeInTheDocument();
  });
  test('check if apiData function was called', () => {
    expect(fetch).toHaveBeenCalled();
    expect(fetch).toHaveBeenCalledTimes(1);
    expect(fetch).toHaveBeenCalledWith('https://economia.awesomeapi.com.br/json/all');
  });
  test('checks if when adding an expense it is rendered on the screen', () => {
    const inputValue = screen.getByTestId('value-input');
    userEvent.type(inputValue, '30');
    expect(inputValue.value).toBe('30');

    const description = screen.getByTestId('description-input');
    userEvent.type(description, 'Hambúrguer');
    expect(description.value).toBe('Hambúrguer');

    const currencyOption = screen.getByTestId('currency-input');
    userEvent.selectOptions(currencyOption, 'USD');
    expect(currencyOption.value).toBe('USD');

    const methodOption = screen.getByTestId('method-input');
    const cardOption = 'Cartão de débito';
    userEvent.selectOptions(methodOption, cardOption);
    expect(methodOption.value).toBe(cardOption);

    const tagOption = screen.getByTestId('tag-input');
    const foodTag = 'Alimentação';
    userEvent.selectOptions(tagOption, foodTag);
    expect(tagOption.value).toBe(foodTag);

    const addButton = screen.getByRole('button', { name: 'Adicionar Despesa' });
    userEvent.click(addButton);
  });
});
