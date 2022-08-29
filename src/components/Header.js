import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';

class Header extends Component {
  render() {
    const { email, value, currency } = this.props;
    return (
      <header>
        <div>
          <p data-testid="email-field">
            Olá
            {' '}
            { email }
          </p>
          <p data-testid="total-field">
            Despesa Total: R$
            {' '}
            { value || 0 }
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
});

Header.propTypes = {
  email: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};

export default connect(mapStateToProps)(Header);
