import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { g_campaignsRequest } from '../actions/campaigns';

class FacebookLoginStatus extends Component {
  static propTypes = {
    facebookApi: PropTypes.string.isRequired,
    linkToDashboard: PropTypes.string.isRequired,
    linkToLogin: PropTypes.string.isRequired
  };

  constructor(props) {
    super(props);

    this.statusChangeCallback = this.statusChangeCallback.bind(this);
  }

  componentWillMount(){
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
    };

    (function(d, s, id){
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) {return;}
      js = d.createElement(s); js.id = id;
      js.src = "https://connect.facebook.net/en_US/sdk.js";
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
  }

  statusChangeCallback(response){
    if (response['status']==="connected"){
      var this_ = this;

      window.FB.api('/me/adaccounts?fields=name', 'get', {access_token: response.authResponse.accessToken}, (response) => {
        if (response.error) {
          console.log(response.error)
        }else{
          this_.props.g_Users(response.data);
          this_.props.g_compaignsRequest(response.data, 0);
        }
      });

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

}),
dispatch => ({
  g_Users: (trackName) => {
    dispatch({ type: 'USERS_CHANGE', payload: trackName });
  },
  g_compaignsRequest: (g_users, userId) => {
    dispatch(g_campaignsRequest(g_users, userId));
  }
})
)(FacebookLoginStatus);