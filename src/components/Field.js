import React, { Component } from 'react';
import './Field.css';

export default

class Field extends Component {
  render() {
    return (
      <div className="field">
        <div className="field-label">
          <label htmlFor={this.props.id}>
            { this.props.label }
          </label>
        </div>
        <div>
          <input id={this.props.id} type="text" {...this.props} />
        </div>
      </div>
    )
  }
}
