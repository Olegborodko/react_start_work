import React, { Component } from 'react';
import FacebookBtn from '../components/FacebookBtn.jsx';
import FacebookLoginStatus from '../components/FacebookLoginStatus.jsx';

class Facebook extends Component {
  render() {
    return (
    <div>
      <FacebookBtn/>
      <br/><br/>
      <FacebookLoginStatus
      facebookApi={ process.env.FACEBOOK_API }
      linkToDashboard = '/dashboard'
      linkToLogin = '/facebook'
      history = {this.props.history}
      />
    </div>
    );
  }
}

export default Facebook;