import React, { Component } from 'react';
import SelectPanel from '../components/SelectPanel';
import { connect } from 'react-redux';
import Logout from '../components/Logout';
var axios = require('axios');

class Dashboard extends Component {
  componentDidMount(){
    // if (this.props.g_urlHistory.length===0){
    //   window.location = '/';
    // }

    var this_=this;
    axios({
      method: 'post',
      url: 'https://'+process.env.HOST_RAILS+'/api/users/verification',
      headers: {'Token': this.props.g_currentUser['token']}
    })
    .then(function (response) {
      if (response){
        if (response['data']){
          this_.props.g_tokenChange(response['data']['token']);
        }
      }
    })
    .catch(function (response) {
      if (response.response){
        this_.props.g_tokenChange(null);
        window.location = '/';
      }else{
        console.log('Server error');
      }
      this_.props.g_tokenChange(null);
      window.location = '/';
    });

  }

  render() {
  //  const {campaignsGlobal, initialApi, usersGlobal} = this.props;
    return (
    <div>
      <Logout facebook_logout={true}/>
      <br/><br/>
      Dashboard

       <br/><br/>
        <SelectPanel/>
    </div>
    );
  }
}

export default connect(
state => ({
  g_users: state.users,
  g_currentUser: state.currentUser
  // g_ads: state.ads
}),
dispatch => ({
  g_tokenChange: (token) => {
    dispatch({ type: 'CURRENT_TOKEN_CHANGE', payload: token });
  }
})
)(Dashboard);