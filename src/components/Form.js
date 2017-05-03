import React, { Component } from 'react';
import Button from './Button';
import './Form.css';

export default

class Form extends Component {
  render() {
    const { buttonLabel, ...props} = this.props;

    return (
      <form className="form" {...props}>
        { this.props.children }

        <div className="button-container">
          <Button label={buttonLabel} type="submit" />
        </div>
      </form>
    )
  }
}
