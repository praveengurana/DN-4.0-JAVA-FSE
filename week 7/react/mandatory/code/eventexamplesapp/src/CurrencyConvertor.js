import React, { Component } from 'react';

class CurrencyConvertor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      amount: '',
      type: ''
    };
  }

  handleAmountChange = (e) => {
    this.setState({ amount: e.target.value });
  };

  handleTypeChange = (e) => {
    this.setState({ type: e.target.value.toLowerCase() });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { amount, type } = this.state;
    const numAmount = parseFloat(amount);

    if (!numAmount || (type !== 'euro' && type !== 'rupee')) {
      alert('Please enter a valid amount and type (euro or rupee)');
      return;
    }

    let result;
    if (type === 'euro') {
      result = numAmount * 90;
      alert(`€${numAmount} is ₹${result.toFixed(2)}`);
    } else {
      result = numAmount / 90;
      alert(`₹${numAmount} is €${result.toFixed(2)}`);
    }
  };

  render() {
    return (
      <div>
        <h2 style={{ color: 'green' }}>Currency Convertor</h2>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>Amount : </label>
            <input type="number" value={this.state.amount} onChange={this.handleAmountChange} />
          </div>
          <div>
            <label>Currency : </label>
            <input type="text" value={this.state.type} onChange={this.handleTypeChange} />
          </div>
          <button type="submit">Convert</button>
        </form>
      </div>
    );
  }
}

export default CurrencyConvertor;
