import axios from 'axios';
import { API, API_KEY, EXCHANGE } from '../constants/endpoints';

export const EXCHANGE_REQUEST = 'EXCHANGE_REQUEST';

export function exchangeRequest(state) {
  return dispatch => {
    return axios
      .get(
        `${API}${EXCHANGE}?${API_KEY}&from=${state.fromCurrency}&to=${
          state.toCurrency
        }&amount=${state.amount}`
      )
      .then(response =>
        dispatch({ type: EXCHANGE_REQUEST, payload: response.data })
      );
  };
}
export default EXCHANGE_REQUEST;
