import apiData from '../../api/getAPIData';

export const SAVE_EMAIL = 'SAVE_EMAIL';
export const VALUE_WALLET = 'VALUE_WALLET';
export const CURRENCY_WALLET = 'CURRENCY_WALLET';
export const CURRENCIES_WALLET = 'CURRENCIES_WALLET';
export const ERROR_API = 'ERROR_API';
export const EXPENSES_WALLET = 'EXPENSES_WALLET';

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
    const data = await apiData();
    const result = Object.keys(data).filter((item) => (item !== 'USDT'));
    dispatch(resultsAPI(result));
  } catch (error) {
    dispatch(getErrorAPI(error));
  }
};

export const expensesWallet = (expenses) => ({
  type: EXPENSES_WALLET,
  expenses,
});

export const addExpenses = (expenses) => async (dispatch) => {
  try {
    const data = await apiData();
    const newExpenses = {
      ...expenses,
      exchangeRates: data,
    };
    dispatch(expensesWallet(newExpenses));
  } catch (error) {
    dispatch(getErrorAPI(error));
  }
};
