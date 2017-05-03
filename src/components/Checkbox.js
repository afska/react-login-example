import React, { Component } from 'react';
import './Checkbox.css';

export default

class Checkbox extends Component {
  render() {
    return (
      <div className="checkbox">
        <input id={this.props.id} type="checkbox" {...this.props} />
        <label htmlFor={this.props.id}>{ this.props.label }</label>
      </div>
    )
  }
}
