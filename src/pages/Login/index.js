import React, { Component } from 'react';
import api from '../../services/api';
import Nav from '../../components/Nav/index';
import '../Login/style.css';

export default class Login extends Component {
  state = {
    email: '',
    password: '',
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    const email = this.state.email;
    const password = this.state.password;
    const response = await api.post('/auth', { email, password });
    console.log(response);
    response.status === 200 ? 
  };

  handleEmailChange = (e) => {
    this.setState({ email: e.target.value });
  };

  handlePasswordChange = (e) => {
    this.setState({ password: e.target.value });
  };

  render() {
    return (
      <>
      <Nav/>
      <div className="content-wrapper">
        <form onSubmit={this.handleSubmit}>
          <div className="input-group">
            <label htmlFor="email-input" className="default-label">Type your e-mail address</label>
            <input 
              id="email-input" 
              name="email-input" 
              className="default-input"
              value={this.state.email}
              onChange={this.handleEmailChange} 
              type="text"/>
          </div>
          <div className="input-group">
            <label htmlFor="password-input" className="default-label">Tell me your secret password</label>
            <input 
              id="password-input" 
              name="password-input"
              className="default-input"
              value={this.state.password} 
              onChange={this.handlePasswordChange}
              type="password"/>
          </div>
          <div className="button-group">
            <button 
              id="sign-up-button"
              className="default-button"
              type="button">
                Sign up
            </button>
            <button 
              id="sign-in-button"
              className="default-button"
              type="submit">
                Sign in
            </button>
          </div>
        </form>
      </div>
      </>
    );
  }
}
