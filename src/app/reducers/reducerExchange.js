import EXCHANGE_REQUEST from '../actions/exchangeRequest';

const INITIAL_STATE = { result: null };
export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case EXCHANGE_REQUEST:
      return { ...state, result: action.payload.result };
    default:
      return state;
  }
}
