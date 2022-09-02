import {
  VALUE_WALLET,
  CURRENCY_WALLET,
  CURRENCIES_WALLET,
  ERROR_API,
  EXPENSES_WALLET,
  DELETE_EXPENSE,
  // EDIT_EXPENSE,
  // ID_TO_EDIT_EXPENSE,
} from '../actions';

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
  case EXPENSES_WALLET:
    return {
      ...state,
      expenses: [...state.expenses, action.expenses],
    };
  case DELETE_EXPENSE:
    return {
      ...state,
      expenses: state.expenses.filter((element) => element.id !== action.payload),
    };
  // case ID_TO_EDIT_EXPENSE:
  //   return {
  //     ...state,
  //     idToEdit: action.id,
  //     editor: true,
  //   };
  // case EDIT_EXPENSE:
  //   return {
  //     ...state,
  //     editor: false,
  //     expenses: state.expenses
  //       .map((element) => (
  //         element.id === state.idToEdit ? action.expenses : { ...element })),
  //   };
  default:
    return state;
  }
}

export default walletreducer;
