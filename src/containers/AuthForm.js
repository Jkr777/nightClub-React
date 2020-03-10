import React, { Component } from 'react';
import axiosInstance from '../services/axios';

class AuthForm extends Component {
  state = {
    adminUsername: '',
    email: '',
    password: '',
  };

  pick = (object, keys) => {
    return keys.reduce((obj, key) => {
      if (object[key]) obj[key] = object[key];
        return obj;
      }, {});
  }; 

  handleChange = e => {
    this.setState({[e.target.name]: e.target.value})
  };

  handleSubmit = e => {
    e.preventDefault();
    
    const data = this.pick(this.state, ["adminUsername", "email", "password"]);
    const endpoint = this.props.endpoint;

    axiosInstance.post(endpoint, data)
      .then(res => {
        this.props.handleAuth(res);
        this.props.history.push("/events");
      })
      .catch(err => this.props.handleError(err.response.data));
  };

  render() {
    return (
      <div className="auth-container">
        { this.props.error && <p className="error">{this.props.error}</p> }
        <form onSubmit={this.handleSubmit} className="auth-container__form">
          { this.props.endpoint === "register" ? 
            <input 
              type="text"
              name="adminUsername"
              placeholder="Username"
              onChange={this.handleChange}
              required 
              className="auth-container__form__input"
            />
            :
            null
          }
          <input 
            type="text"
            name="email"
            placeholder="Email"
            onChange={this.handleChange}
            required 
            className="auth-container__form__input"
          />
          <input 
            type="password"
            name="password"
            placeholder="Password"
            onChange={this.handleChange}
            required
            className="auth-container__form__input"
          />
          <button className="auth-container__form__btn">{ this.props.endpoint }</button>
        </form>
      </div>
    )
  }
}

export default AuthForm;