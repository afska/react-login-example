import React, { Component } from 'react';
import './Modal.css';

export default

class Modal extends Component {
  render() {
    return (
      <div className="modal">
        <div className="modal-content">
          { this.props.children }
        </div>
      </div>
    )
  }
}
