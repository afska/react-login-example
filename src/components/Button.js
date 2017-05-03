import React, { Component } from 'react';
import './Button.css';

export default

class Button extends Component {
  render() {
    return (
      <button className="button" type="button" {...this.props}>
        { this.props.label }
      </button>
    )
  }
}
