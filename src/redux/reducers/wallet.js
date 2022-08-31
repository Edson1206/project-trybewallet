import { VALUE_WALLET, CURRENCY_WALLET, CURRENCIES_WALLET, ERROR_API } from '../actions';

const INITIAL_STATE = {
  wallet: 0,
  currency: 'BRL',
  currencies: [], // array de string
  expenses: [], // array de objetos, com cada objeto tendo as chaves id, value, currency, method, tag, description e exchangeRates
  editor: false, // valor booleano que indica de uma despesa está sendo editada
  idToEdit: 0, // valor numérico que armazena o id da despesa que esta sendo editada
};

function walletreducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case VALUE_WALLET:
    return {
      ...state,
      wallet: action.wallet,
    };
  case CURRENCY_WALLET: {
    return {
      ...state,
      currency: action.currency,
    };
  }
  case CURRENCIES_WALLET: {
    return {
      ...state,
      currencies: action.payload,
    };
  }
  case ERROR_API:
    return {
      ...state,
      error: action.err,
    };
  default:
    return state;
  }
}

export default walletreducer;
