import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import { connect } from 'react-redux';
import Cookies from 'universal-cookie';

const cookies = new Cookies();
var axios = require('axios');

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount(){
    if (cookies.get('market_admin_co')){
      this.props.history.push('/admin');
    }
    if (cookies.get('market_user_co')){
      this.props.history.push('/facebook');
    }
  }

  handleSubmit(event){
    event.preventDefault();
    var this_=this;
    axios.post('https://'+process.env.HOST_RAILS+'/api/users/login', {
      email: this.refs.email_input.value,
      password: this.refs.password_input.value
    })
    .then(function (response) {
      if (response){
        if (response['data']){
          //console.log(response['data']['token']);
          this_.props.g_tokenChange(response['data']['token']);
          this_.props.g_emailChange(response['data']['email']);
          if (response['data']['email'] === process.env.ADMIN_EMAIL){
            cookies.set('market_admin_co', response['data']['token'], { path: '/', secure: true });
            this_.props.history.push('/admin');
          }else {
            cookies.set('market_user_co', response['data']['token'], { path: '/', secure: true });
            this_.props.history.push('/facebook');
          }
        }
      }
    })
    .catch(function (response) {
      console.log(response.response);
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
    <Grid>
      <Row className="show-grid">
        <Col sm={12}>

          <form onSubmit={this.handleSubmit} className="form_login">
            <ul>
              <li className="logo">
                Logo
              </li>
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
                <button>Sign In</button>
              </li>
            </ul>
          </form>

          <div className="error">{error}</div>
        </Col>
      </Row>
    </Grid>
    );
  }
}

export default connect(
state => ({
  g_users: state.users,
  g_campaigns: state.campaigns,
  g_ads: state.ads
}),
dispatch => ({
  g_tokenChange: (token) => {
    dispatch({ type: 'CURRENT_TOKEN_CHANGE', payload: token });
  },
  g_emailChange: (email) => {
    dispatch({ type: 'CURRENT_EMAIL_CHANGE', payload: email });
  },
})
)(Login);