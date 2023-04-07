import React from 'react';
import logo from './logo.svg';

function Header() {
    return (
      <header className="App-header">
        <nav className="nav">
          <img src={logo} className="App-logo" alt="logo" />
          <h3>ReactFacts</h3>
          <h4 className="nav-items">React Course - Project 1</h4>
        </nav>
      </header>
    )
  }

  export default Header;