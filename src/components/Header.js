import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';

class Header extends Component {
  render() {
    const { email, currency, expenses } = this.props;
    return (
      <header>
        <div>
          <p data-testid="email-field">
            Olá
            {' '}
            { email }
          </p>
          <p>
            Despesa Total: R$
            {' '}
          </p>
          <p data-testid="total-field">
            { expenses.reduce((acc, expense) => (
              acc + expense.value * expense
                .exchangeRates[expense.currency].ask), 0).toFixed(2) || 0 }
          </p>
          <p data-testid="header-currency-field">
            { currency }
          </p>
        </div>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  value: state.wallet.value,
  currency: state.wallet.currency,
  expenses: state.wallet.expenses,
});

Header.propTypes = {
  email: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
  expenses: PropTypes.arrayOf.isRequired,
};

export default connect(mapStateToProps)(Header);
