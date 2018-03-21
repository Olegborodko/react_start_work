import React, { Component } from 'react';
import FacebookLoginStatus from '../components/FacebookLoginStatus.jsx';

class App extends Component {
  render() {
    return (
      <div className="App">
        <FacebookLoginStatus
          facebookApi={ process.env.FACEBOOK_API }
          linkToDashboard = '/dashboard'
          linkToLogin = '/'
        />
      </div>
    );
  }
}

export default App;
