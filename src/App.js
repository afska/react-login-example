import React, { Component } from 'react';
import LoginModal from './components/LoginModal';
import './App.css';

export default

class App extends Component {
  render() {
    return (
      <div className="app">
        <LoginModal />
      </div>
    )
  }
}
