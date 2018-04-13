import React, { Component } from 'react';
import { connect } from 'react-redux';
import Logout from '../components/Logout';
var axios = require('axios');

class Admin extends Component {
  constructor(props) {
    super(props);
    //const data = props.data;
    // this.state = {
    //   selectValue: ''
    // };

    this.users_show = this.users_show.bind(this);
  }

  users_show(){
    var this_=this;
    axios({
      method: 'post',
      url: 'https://'+process.env.HOST_RAILS+'/api/users/verification',
      headers: {'Token': this.props.g_currentUser['token']}
    })
    .then(function (response) {
      if (response){
        if (response['data']){
          if (response['data']['email'] === process.env.ADMIN_EMAIL) {
            this_.props.g_tokenChange(response['data']['token']);
          }else{
            this_.props.g_tokenChange(null);
            window.location = '/';
          }
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

  componentDidMount(){

    var this_=this;
    axios({
      method: 'post',
      url: 'https://'+process.env.HOST_RAILS+'/api/users/verification',
      headers: {'Token': this.props.g_currentUser['token']}
    })
    .then(function (response) {
      if (response){
        if (response['data']){
          if (response['data']['email'] === process.env.ADMIN_EMAIL) {
            this_.props.g_tokenChange(response['data']['token']);
          }else{
            this_.props.g_tokenChange(null);
            window.location = '/';
          }
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
      <Logout facebook_logout={false}/>
      <br/><br/>


    </div>
    );
  }
}

export default connect(
state => ({
  g_currentUser: state.currentUser
}),
dispatch => ({
  g_tokenChange: (token) => {
    dispatch({ type: 'CURRENT_TOKEN_CHANGE', payload: token });
  }
})
)(Admin);