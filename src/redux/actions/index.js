export const SAVE_EMAIL = 'SAVE_EMAIL';
export const VALUE_WALLET = 'VALUE_WALLET';
export const CURRENCY_WALLET = 'CURRENCY_WALLET';
export const CURRENCIES_WALLET = 'CURRENCIES_WALLET';
export const ERROR_API = 'ERROR_API';
export const URL = 'https://economia.awesomeapi.com.br/json/all';

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

export const resultsAPI = (currencies) => ({
  type: CURRENCIES_WALLET,
  payload: currencies,
});

export const getErrorAPI = (error) => ({
  type: ERROR_API,
  error,
});

export const getAPIThunk = () => async (dispatch) => {
  try {
    const response = await fetch(URL);
    const data = await response.json();
    const result = Object.keys(data).filter((item) => (item !== 'USDT'));
    dispatch(resultsAPI(result));
  } catch (error) {
    dispatch(getErrorAPI(error));
  }
};
