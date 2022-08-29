import { VALUE_WALLET, CURRENCY_WALLET } from '../actions';

const INITIAL_STATE = {
  wallet: 0,
  currency: 'BRL',
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
  default:
    return state;
  }
}

export default walletreducer;
