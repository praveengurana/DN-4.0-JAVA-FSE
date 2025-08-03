import React from 'react';
import './App.css';
import CurrencyConvertor from './CurrencyConvertor';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      message: ''
    };
  }

  increment = () => {
    this.setState({ counter: this.state.counter + 1 });
  };


  handleIncrement = () => {
    this.increment();
  };

  decrement = () => {
    this.setState({ counter: this.state.counter - 1 });
  };

  sayWelcome = (msg) => {
    alert(msg);
  };

  handleClick = (e) => {
    alert('I was clicked'); 
  };

  render() {
    return (
      <div className="App">

        <h2>{this.state.counter}</h2>
        <button onClick={this.handleIncrement}>Increment</button> <br/>
        <button onClick={this.decrement}>Decrement</button>
        <br />
        <button onClick={() => this.sayWelcome('Welcome!')}>Say Welcome</button>

        <br />
        <button onClick={this.handleClick}>Click on me</button>

        <br /><br />
        <CurrencyConvertor />
      </div>
    );
  }
}

export default App;
