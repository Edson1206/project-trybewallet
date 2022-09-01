import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addExpenses, getAPIThunk } from '../redux/actions';

class WalletForm extends Component {
  constructor() {
    super();
    this.state = {
      value: '',
      description: '',
      currency: 'USD',
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

  addExpenseButton = () => {
    const { value, description, currency, method, tag } = this.state;
    const { addExpense, expenses } = this.props;
    const newExpense = { id: expenses.length, value, description, currency, method, tag };
    addExpense(newExpense);
    this.setState({
      value: '',
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
    });
  };

  render() {
    const { value, description, currency, method, tag } = this.state;
    const { currencies } = this.props;
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
            value={ description }
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="currencies">
          Moeda:
          <select
            id="currencies"
            data-testid="currency-input"
            name="currency"
            value={ currency }
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
            <option>Dinheiro</option>
            <option>Cartão de crédito</option>
            <option>Cartão de débito</option>
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
            <option>Alimentação</option>
            <option>Lazer</option>
            <option>Trabalho</option>
            <option>Transporte</option>
            <option>Saúde</option>
          </select>
        </label>
        <button
          type="button"
          onClick={ this.addExpenseButton }
        >
          Adicionar despesa
        </button>
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  getCurrencies: () => dispatch(getAPIThunk()),
  addExpense: (expense) => dispatch(addExpenses(expense)),
});

WalletForm.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.obj),
}.isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(WalletForm);
