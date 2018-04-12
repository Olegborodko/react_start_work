import React, { Component } from 'react';
import { connect } from 'react-redux';
var axios = require('axios');

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
      url: 'https://localhost:3001/api/users/logout',
      headers: {'Token': this.props.g_token['token']},
      params: {'email': this.props.g_token['email']}
    })
    .then(function (response) {
      if (response){
      console.log(response);
      }
    })
    .catch(function (response) {
      if (response.response){

      }else{
        console.log('Server error');
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

})
)(Logout);