import React, { Component } from 'react';
import { connect } from 'react-redux';
import Logout from '../components/Logout';
import Cookies from 'universal-cookie';

const cookies = new Cookies();
var axios = require('axios');

class Admin extends Component {
  constructor(props) {
    super(props);
    //const data = props.data;
    this.state = {
      users: []
    };

    this.users_show = this.users_show.bind(this);
    this.error = this.error.bind(this);
  }

  error(){
    cookies.remove('market_admin_co', { path: '/', secure: true });
    window.location = '/';
  }

  users_show(){

  }

  componentDidMount(){
    var this_=this;
    var response_params = {method: 'post',
    url: 'https://'+process.env.HOST_RAILS+'/api/users/verification'};

    var token_cookie = cookies.get('market_admin_co');
    if (token_cookie){
      response_params['headers'] = {'Token': token_cookie};
    }else{
      response_params['headers'] = {'Token': this_.props.g_currentUser['token']};
    }

    axios(response_params)
    .then(function (response) {
      if (response){
        if (response['data']){
          if (response['data']['email'] === process.env.ADMIN_EMAIL) {
            this_.props.g_tokenChange(response['data']['token']);
            cookies.set('market_admin_co', response['data']['token'], { path: '/', secure: true });
            return;
          }
        }
      }
      this_.error();
    })
    .catch(function (response) {
      this_.error();
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