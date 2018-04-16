import React, { Component } from 'react';
import { connect } from 'react-redux';
import Cookies from 'universal-cookie';
var axios = require('axios');
const cookies = new Cookies();

class Logout extends Component {
  constructor(props) {
    super(props);
    //const data = props.data;
    // this.state = {
    //   selectValue: ''
    // };

    this.logoutF = this.logoutF.bind(this);
  }

  logoutF(){
    // window.FB.logout(function(response) {
    // });
    //console.log(this.props.g_token[0]['user']);

    var this_=this;
    axios({
      method: 'post',
      url: 'https://'+process.env.HOST_RAILS+'/api/users/logout',
      headers: {'Token': this.props.g_token['token']}
    })
    .then(function (response) {
      if (response){
        cookies.remove('market_user_co', { path: '/', secure: true });
        cookies.remove('market_admin_co', { path: '/', secure: true });
        this_.props.g_tokenChange(null);

        if (this_.props.facebook_logout===true) {
          window.FB.logout(function (response) {
          });
        }
        window.location = '/';
      }
    });
  }

  render() {
    // const {data} = this.props;
    // const {selectValue} = this.state;
    return (
    <div onClick={this.logoutF}>
      Log out
    </div>
    );
  }
}

export default connect(
state => ({
  g_token: state.currentUser
}),
dispatch => ({
  g_tokenChange: (token) => {
    dispatch({ type: 'CURRENT_TOKEN_CHANGE', payload: token });
  }
})
)(Logout);