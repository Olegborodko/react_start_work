import React, { Component } from 'react';
import PropTypes from 'prop-types';

import LoginHOC from 'react-facebook-login-hoc';

const configureLoginProps = {
  scope: 'public_profile, ads_management, ads_read',
  xfbml: true,
  cookie: true,
  version: 2.12,
  language: 'en_US',
  appId: process.env.FACEBOOK_API
};

class FacebookTest extends Component {
  constructor(props) {
    super(props);

    this.status = this.props.fb.status;
    this.login = this.props.fb.login;
    this.logout = this.props.fb.logout;
  }

  componentDidMount(){
    this.getStatus(response);
  }

  getStatus(response) {
    console.log(response.authResponse);
    if (response.authResponse) {
      this.responseApi.call(this, response.authResponse);
    }
  }

  responseApi(res) {
    console.log(res);
    console.log('token:', res.accessToken);

    window.FB.api('/me/adaccounts', 'get', {access_token: res.accessToken}, (response) => {
      if (response.error) {
        console.log(response.error)
      }else{
        console.log(response)
      }

    })
  }

  checkLoginState() {
    this.status(this.getStatus.bind(this));
  };

  loginFacebook() {
    this.login(this.getStatus.bind(this));
  }

  logoutFacebook() {
    this.logout();
  }
  render() {
    return (
    <div>
      <button onClick={ this.checkLoginState.bind(this) }>Get Facebook Login Status</button>
      <button onClick={ this.loginFacebook.bind(this) }>Facebook Login</button>
      <button onClick={ this.logoutFacebook.bind(this) }>Facebook Logout</button>
    </div>
      );
  }
}

export default LoginHOC(configureLoginProps)(FacebookTest);

