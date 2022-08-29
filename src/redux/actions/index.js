export const SAVE_EMAIL = 'SAVE_EMAIL';
export const VALUE_WALLET = 'VALUE_WALLET';
export const CURRENCY_WALLET = 'CURRENCY_WALLET';

export const saveEmail = (email) => ({
  type: SAVE_EMAIL,
  email,
});

export const valueWallet = (value) => ({
  type: VALUE_WALLET,
  value,
});

export const currencyWallet = (currency) => ({
  type: CURRENCY_WALLET,
  currency,
});
