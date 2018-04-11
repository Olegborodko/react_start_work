import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import { connect } from 'react-redux';
var axios = require('axios');

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event){
    event.preventDefault();
    var this_=this;
    axios.post('https://localhost:3001/api/users/login', {
      email: this.refs.email_input.value,
      password: this.refs.password_input.value
    })
    .then(function (response) {
      if (response){
        console.log(response);
        this_.props.history.push('/facebook');
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
          <form onSubmit={this.handleSubmit}>
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

          <div>{error}</div>
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
  // g_compaignsRequest: (g_users, userIndex, campaignIndex) => {
  //   dispatch(g_campaignsRequest(g_users, userIndex, campaignIndex));
  // },
  // g_adsRequest: (g_campaigns, campaignIndex) => {
  //   dispatch(g_adsRequest(g_campaigns, campaignIndex));
  // }
})
)(Login);