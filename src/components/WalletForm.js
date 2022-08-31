import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getAPIThunk } from '../redux/actions';

class WalletForm extends Component {
  constructor() {
    super();
    this.state = {
      value: '',
      method: 'Dinheiro',
      tag: 'Alimentação',
    };
  }

  componentDidMount() {
    const { getCurrencies } = this.props;
    getCurrencies();
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  };

  render() {
    const { value, method, tag } = this.state;
    const { currencies } = this.props;
    console.log(currencies);
    return (
      <form>
        <label htmlFor="valueInput">
          Valor:
          <input
            type="text"
            data-testid="value-input"
            name="value"
            id="valueInput"
            onChange={ this.handleChange }
            value={ value }
          />
        </label>
        <label htmlFor="descriptionInput">
          descrição:
          <input
            type="text"
            data-testid="description-input"
            id="descriptionInput"
            name="description"
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="currencies">
          Moeda:
          <select
            id="currencies"
            data-testid="currency-input"
            name="currency"
            onChange={ this.handleChange }
          >
            {currencies.map((coin) => (
              <option
                key={ coin }
                value={ coin }
              >
                {coin}

              </option>))}
          </select>
        </label>
        <label htmlFor="pay">
          Pagamento:
          <select
            id="pay"
            data-testid="method-input"
            name="method"
            value={ method }
            onChange={ this.handleChange }
          >
            <option value="money">Dinheiro</option>
            <option value="credit-card">Cartão de crédito</option>
            <option value="debit-card">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag">
          Categoria:
          <select
            id="tag"
            data-testid="tag-input"
            name="tag"
            value={ tag }
            onChange={ this.handleChange }
          >
            <option value="food">Alimentação</option>
            <option value="leisure">Lazer</option>
            <option value="work">Trabalho</option>
            <option value="transport">Transporte</option>
            <option value="health">Saúde</option>
          </select>
        </label>
        <button
          type="button"
          onClick={ () => {} }
        >
          Adicionar despesa
        </button>
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  getCurrencies: () => dispatch(getAPIThunk()),
});

WalletForm.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.obj),
}.isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(WalletForm);
