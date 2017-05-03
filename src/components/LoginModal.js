import React, { Component } from 'react';
import Modal from './Modal';
import Form from './Form';
import Field from './Field';
import Link from './Link';
import Checkbox from './Checkbox';
import './LoginModal.css';

export default

class LoginModal extends Component {
  constructor(props) {
    super(props);
    this.state = { username: "", password: "", remember: false };

    this.onUsernameChange = this.onUsernameChange.bind(this);
    this.onPasswordChange = this.onPasswordChange.bind(this);
  }

  render() {
    return (
      <Modal>
        <Form onSubmit={() => this.login()} buttonLabel="LOGIN">
          <Field id="username" label="Email or username" autoFocus onChange={this.onUsernameChange} />
          <Field id="password" label="Password" type="password" onChange={this.onPasswordChange} />

          <div className="align-right">
            <Link onClick={() => this.forgotPassword()}>Forgot password?</Link>
          </div>

          <Checkbox id="remember" label="Remember me" />
        </Form>
      </Modal>
    )
  }

  onUsernameChange(e) {
    this.setState({ username: e.target.value });
  }

  onPasswordChange(e) {
    this.setState({ password: e.target.value });
  }

  forgotPassword() {
    alert("Forgot password");
  }

  login(e) {
    alert(`Login with username: ${this.state.username} and password: ${this.state.password}`);
  }
}
