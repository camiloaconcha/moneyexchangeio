import React, { Component } from 'react';
import { connect } from 'react-redux';
import { EUR, USD, EURO, DOLLAR } from '../constants/currencies';
import NumberFormat from 'react-number-format';
import { exchangeRequest } from './../actions/exchangeRequest';

const mapStateToProps = state => ({
  ...state
});

const mapDispatchToProps = dispatch => ({
  exchangeRequest: state => dispatch(exchangeRequest(state))
});

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
  }

  exchangeRequest = event => {
    this.props.exchangeRequest(this.state);
  };

  render() {
    return (
      <div className="exchanger">
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
          value={this.props.reducerExchange.result}
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

        <button
          className="exchanger__button"
          onClick={this.exchangeRequest}
          disabled={!this.state.amount}
        >
          CALCULATE
        </button>
      </div>
    );
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CurrencyExchanger);
