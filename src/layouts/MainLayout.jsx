import React, { Component } from 'react';
import FacebookBtn from '../components/FacebookBtn.jsx';
import FacebookLoginStatus from '../components/FacebookLoginStatus.jsx';

import { connect } from 'react-redux';

class MainLayout extends Component {
  addFunc(){
    this.props.onAddTrack('3');
  }

  render() {
    return (
    <div>
      {console.log(this.props.globalState)}
      <FacebookBtn/>
      <FacebookLoginStatus
      facebookApi={ process.env.FACEBOOK_API }
      linkToDashboard = '/dashboard'
      linkToLogin = '/'
      />
      <ul>
        { this.props.globalState['testArray'].map((track, index) =>
        <li key={index}>{track}</li>
        )}
      </ul>
      <button onClick={this.addFunc.bind(this)}>Add Track</button>

      {this.props.children}
    </div>
    );
  }
}

export default connect(
  state => ({
    globalState: state
  }),
  dispatch => ({
    onAddTrack: (trackName) => {
      dispatch({ type: 'ADD_TRACK', payload: trackName });
    }
  })
)(MainLayout);