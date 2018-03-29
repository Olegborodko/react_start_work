import React, { Component } from 'react';
import FacebookBtn from '../components/FacebookBtn.jsx';
import FacebookLoginStatus from '../components/FacebookLoginStatus.jsx';

import { connect } from 'react-redux';

class MainLayout extends Component {

  render() {
    return (
    <div>
      <FacebookBtn/>
      <br/><br/>
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

export default connect(
  state => ({

  }),
  dispatch => ({

  })
)(MainLayout);