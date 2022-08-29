import React from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { saveEmail } from '../redux/actions/index';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      disabled: true,
    };
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    }, this.buttonEnabled());
  };

  buttonEnabled = () => {
    const { email, password } = this.state;
    const validateEmail = /^[\w+.]+@\w+\.\w{2,}(?:\.\w{2})?$/.test(email);
    const five = 5;
    if (password.length >= five
        && validateEmail
    ) {
      this.setState({ disabled: false });
    } else {
      this.setState({ disabled: true });
    }
  };

  handleClick = () => {
    const { email } = this.state;
    const { history, dispatch } = this.props;
    dispatch(saveEmail(email));
    history.push('/carteira');
  };

  render() {
    const { email, password, disabled } = this.state;

    return (
      <div className="Login">
        <h3 className="text-center">Login</h3>
        <section className="login-inputs">
          <input
            type="email"
            name="email"
            onChange={ this.handleChange }
            value={ email }
            placeholder="E-mail"
            data-testid="email-input"
          />
          <input
            type="password"
            name="password"
            onChange={ this.handleChange }
            value={ password }
            placeholder="Senha"
            data-testid="password-input"
          />
        </section>
        <div className="button">
          <button
            data-testid="login-submit-button"
            type="button"
            disabled={ disabled }
            onClick={ this.handleClick }
          >
            Entrar
          </button>
        </div>
      </div>
    );
  }
}

Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default connect()(Login);
