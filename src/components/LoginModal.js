import React, { Component } from 'react';
import Modal from './Modal';
import Form from './Form';
import Field from './Field';
import Link from './Link';
import Checkbox from './Checkbox';
import './LoginModal.css';

export default

class LoginModal extends Component {
  render() {
    return (
      <Modal>
        <Form onSubmit={() => this.login()} buttonLabel="LOGIN">
          <Field id="username" label="Email or username" autoFocus />
          <Field id="password" label="Password" type="password" />

          <div className="align-right">
            <Link onClick={() => this.forgotPassword()}>Forgot password?</Link>
          </div>

          <Checkbox id="remember" label="Remember me" />
        </Form>
      </Modal>
    )
  }

  forgotPassword() {
    alert("Forgot password");
  }

  login(e) {
    alert("Login");
  }
}
