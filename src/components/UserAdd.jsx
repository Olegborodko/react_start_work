import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import { connect } from 'react-redux';

var axios = require('axios');

class UserAdd extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: ''
    };
    //
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount(){
    // if (cookies.get('market_admin_co')){
    //   this.props.history.push('/admin');
    // }
    // if (cookies.get('market_user_co')){
    //   this.props.history.push('/facebook');
    // }
  }

  handleSubmit(event){
    event.preventDefault();
    var this_=this;

    axios({
      url: 'https://'+process.env.HOST_RAILS+'/api/admin/user_add',
      method: 'post',
      headers: {'Token': this_.props.g_token['token']},
      data: {
        email: this_.refs.email_input.value,
        password: this_.refs.password_input.value,
        name: this_.refs.name_input.value
      }
    })
    .then(function (response) {
      if (response){
        if (response['data']){
          this_.props.user_add(response['data']['user']);
        }
      }
    })
    .catch(function (response) {
      if (response.response){
        this_.setState({
          error: response.response.data.error
        });
      }else{
        this_.setState({
          error: 'Server connection error'
        });
      }
    });
  }

  render() {
    const {error} = this.state;

    return (
    <div>
      <form onSubmit={this.handleSubmit} className="form_user_add">
        <ul>
          <li>
            <input
            type="text"
            placeholder="E-mail"
            ref="email_input"
            />
          </li>
          <li>
            <input
            type="password"
            placeholder="Password"
            ref="password_input"
            />
          </li>
          <li>
            <input
            type="text"
            placeholder="name"
            ref="name_input"
            />
          </li>
          <li>
            <button>User add</button>
          </li>
        </ul>
      </form>
      <div className="error">{error}</div>
    </div>
    );
  }
}

export default connect(
state => ({
  g_token: state.currentUser
  // g_users: state.users,
  // g_campaigns: state.campaigns,
  // g_ads: state.ads
}),
dispatch => ({
  // g_emailChange: (email) => {
  //   dispatch({ type: 'CURRENT_EMAIL_CHANGE', payload: email });
  // },
})
)(UserAdd);