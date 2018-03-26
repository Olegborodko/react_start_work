import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class FacebookLoginStatus extends Component {
  static propTypes = {
    facebookApi: PropTypes.string.isRequired,
    linkToDashboard: PropTypes.string.isRequired,
    linkToLogin: PropTypes.string.isRequired
  };

  constructor(props) {
    super(props);
    //const data = props.data;
    //this.state = {
    //  bounty_program: 0
    //};

    this.statusChangeCallback = this.statusChangeCallback.bind(this);
  }

  componentDidMount(){
    var this_ = this;

    window.fbAsyncInit = function(){
      window.FB.init({
        appId      : this_.props.facebookApi,
        cookie     : true,
        xfbml      : true,
        version    : 'v2.12'
      });

      window.FB.AppEvents.logPageView();

      window.FB.getLoginStatus(function(response) {
        this_.statusChangeCallback(response);
      });

      window.FB.Event.subscribe('auth.statusChange', (response) => {
        this_.statusChangeCallback(response);
      });
    }.bind(this);

    (function(d, s, id){
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) {return;}
      js = d.createElement(s); js.id = id;
      js.src = "https://connect.facebook.net/en_US/sdk.js";
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
  }

  statusChangeCallback(response){
    //console.log(response['status']);
    if (response['status']==="connected"){
      this.props.setToken(response.authResponse.accessToken);
      this.props.initialApiTrue(true);

      if (window.location.pathname===this.props.linkToLogin){
        window.location = this.props.linkToDashboard;
      }
    }else{
      if (window.location.pathname!==this.props.linkToLogin) {
        window.location = this.props.linkToLogin;
      }
    }
  }

  render() {
    return (
    <div></div>
    );
  }
}

export default connect(
state => ({
  initialApi: state.initialApi.access
}),
dispatch => ({
  initialApiTrue: (trackName) => {
    dispatch({type: 'TRUE', payload: trackName });
  },
  initialApiFalse: (trackName) => {
    dispatch({type: 'FALSE', payload: trackName });
  },
  setToken: (trackName) => {
    dispatch({type: 'TOKEN', payload: trackName });
  }
})
)(FacebookLoginStatus);