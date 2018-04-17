import React, { Component } from 'react';
import SelectPanel from '../components/SelectPanel';
import { connect } from 'react-redux';
import Logout from '../components/Logout';
import Cookies from 'universal-cookie';
import { Grid, Row, Col } from 'react-bootstrap';

const cookies = new Cookies();
var axios = require('axios');

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.error = this.error.bind(this);
    this.statusChangeCallback = this.statusChangeCallback.bind(this);
  }

  error(){
    cookies.remove('market_user_co', { path: '/', secure: true });
    window.location = '/';
  }

  statusChangeCallback(response){
    var this_=this;
    if (response['status']==="connected"){

      window.FB.api('/me/adaccounts?fields=name', 'get', {access_token: response.authResponse.accessToken}, (response) => {
        if (response.error) {
          console.log(response.error)
        }else{
          this_.props.g_Users(response.data);
          this_.props.g_compaignsRequest(response.data, 0, 0);
        }
      });
    }
  }

  componentDidMount(){
    var this_=this;
    var response_params = {method: 'post',
      url: 'https://'+process.env.HOST_RAILS+'/api/users/verification'};

    var token_cookie = cookies.get('market_user_co');
    if (token_cookie){
      if (this_.props.g_urlHistory.length===0){
        window.location = '/facebook';
      }
      response_params['headers'] = {'Token': token_cookie};
    }else{
      response_params['headers'] = {'Token': this_.props.g_currentUser['token']};
    }

    axios(response_params).then(function (response) {
      if (response){
        if (response['data']){
          this_.props.g_tokenChange(response['data']['token']);
          cookies.set('market_user_co', response['data']['token'], { path: '/', secure: true });
          return;
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
      <Grid>
        <Row className="show-grid">
          <Col sm={12}>
      <Logout facebook_logout={true}/>
      <br/><br/>
      Dashboard

       <br/><br/>
        <SelectPanel/>
          </Col>
        </Row>
      </Grid>
    </div>
    );
  }
}

export default connect(
state => ({
  g_users: state.users,
  g_currentUser: state.currentUser,
  g_urlHistory: state.urlHistory
  // g_ads: state.ads
}),
dispatch => ({
  g_tokenChange: (token) => {
    dispatch({ type: 'CURRENT_TOKEN_CHANGE', payload: token });
  }
})
)(Dashboard);