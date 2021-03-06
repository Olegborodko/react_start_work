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
    this.state = {
      error: ''
    };

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
    var this_=this;
    if (response['status']==="connected"){

      window.FB.api('/me/adaccounts?fields=name', 'get', {access_token: response.authResponse.accessToken}, (response) => {
        if (response.error) {
          console.log(response.error)
        }else{
          this_.props.g_Users(response.data);
          this_.props.g_compaignsRequest(response.data, 0, 0, 0);
        }
      });

      if (window.location.pathname===this_.props.linkToLogin){
        //console.log(this_.props.history.location.pathname);
        this_.props.g_urlHistory(this_.props.history.location.pathname);
        this_.props.history.push(this_.props.linkToDashboard);
      }
    }else{
      if (window.location.pathname!==this_.props.linkToLogin) {
        window.location = this.props.linkToLogin;
        //this_.props.history.push(this_.props.linkToLogin);
        //browserHistory.push(this_.props.linkToLogin);
      }

      if (response.authResponse===null){
        this_.setState({
          error: 'Please Log out and then Log in again'
        });
      }else{
        this_.setState({
          error: ''
        });
      }
    }
  }

  render() {
    const {error} = this.state;
    return (
    <div className="error">{error}</div>
    );
  }
}

export default connect(
state => ({
  g_users: state.users,

}),
dispatch => ({
  g_Users: (trackName) => {
    dispatch({ type: 'USERS_CHANGE', payload: trackName });
  },
  g_compaignsRequest: (g_users, userIndex, campaignIndex, adIndex) => {
    dispatch(g_campaignsRequest(g_users, userIndex, campaignIndex, adIndex));
  },
  g_urlHistory: (url) => {
    dispatch({ type: 'URL_HISTORY_ADD', payload: url });
  }
})
)(FacebookLoginStatus);