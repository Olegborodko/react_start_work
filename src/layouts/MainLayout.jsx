import React, { Component } from 'react';
import FacebookBtn from '../components/FacebookBtn.jsx';
import FacebookLoginStatus from '../components/FacebookLoginStatus.jsx';

class MainLayout extends Component {
  render() {
    return (
    <div>
      <FacebookBtn/>
      <FacebookLoginStatus
      facebookApi={ process.env.FACEBOOK_API }
      linkToDashboard = '/dashboard'
      linkToLogin = '/'
      />
      {this.props.children}
    </div>
    );
  }
}

export default MainLayout;