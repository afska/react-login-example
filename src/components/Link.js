import React, { Component } from 'react';
import './Link.css';

export default

class Link extends Component {
  render() {
    return (
      <a className="link" {...this.props}>
        { this.props.children }
      </a>
    )
  }
}
