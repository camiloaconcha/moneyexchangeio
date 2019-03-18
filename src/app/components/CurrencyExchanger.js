import React, { Component } from 'react';
import axios from 'axios';
import { API, API_KEY, EXCHANGE } from '../constants/endpoints';
import { EUR, USD, EURO, DOLLAR } from '../constants/currencies';
import NumberFormat from 'react-number-format';

class CurrencyExchanger extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fromCurrency: USD,
      toCurrency: EUR,
      formattedAmount: '',
      result: '',
      amount: ''
    };
    this.exchangeRequest = this.exchangeRequest.bind(this);
  }

  exchangeRequest() {
    axios
      .get(
        `${API}${EXCHANGE}?${API_KEY}&from=${this.state.fromCurrency}&to=${
          this.state.toCurrency
        }&amount=${this.state.amount}`
      )
      .then(response => this.setState({ result: response.data.result }));
  }

  render() {
    return (
      <div className='exchanger'>
        <NumberFormat
          value={this.state.formattedAmount}
          thousandSeparator={true}
          prefix={DOLLAR}
          placeholder={USD}
          onValueChange={values => {
            const { formattedValue, value } = values;
            this.setState({ formattedAmount: formattedValue, amount: value });
          }}
          className="exchanger__input"
        />

        <NumberFormat
          value={this.state.result}
          thousandSeparator={true}
          prefix={EURO}
          disabled
          placeholder={EUR}
          onValueChange={values => {
            const { formattedValue } = values;
            this.setState({ result: formattedValue });
          }}
          className="exchanger__input"
        />

        <button className="exchanger__button" onClick={this.exchangeRequest} disabled={!this.state.amount}>CALCULATE</button>
      </div>
    );
  }
}

export default CurrencyExchanger;
