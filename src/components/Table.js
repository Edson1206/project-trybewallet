import React, { Component } from 'react';

class Table extends Component {
  render() {
    const header = ['Descrição', 'Tag', 'Método de pagamento', 'Valor', 'Moeda',
      'Câmbio utilizado', 'Valor convertido', 'Moeda de conversão', 'Editar/Excluir'];
    return (
      <table>
        <thead>
          <tr>
            {header.map((element) => (
              <th key={ element }>{ element }</th>
            ))}
          </tr>
        </thead>
      </table>
    );
  }
}

export default Table;
