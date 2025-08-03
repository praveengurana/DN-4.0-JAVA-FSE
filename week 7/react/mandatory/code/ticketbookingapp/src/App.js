import React, { Component } from 'react';
import GuestPage from './GuestPage';
import UserPage from './UserPage';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false
    };
  }

  handleLogin = () => {
    this.setState({ isLoggedIn: true });
  };

  handleLogout = () => {
    this.setState({ isLoggedIn: false });
  };

  render() {
    const { isLoggedIn } = this.state;

    let page;
    if (isLoggedIn) {
      page = <UserPage onLogout={this.handleLogout} />;
    } else {
      page = <GuestPage onLogin={this.handleLogin} />;
    }

    return (
      <div>
        <h1>Flight Ticket Booking App</h1>
        {page}
      </div>
    );
  }
}

export default App;
