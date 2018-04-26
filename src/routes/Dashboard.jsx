import React, { Component } from 'react';
import SelectPanel from '../components/SelectPanel';
import { connect } from 'react-redux';
import Logout from '../components/Logout';
import Cookies from 'universal-cookie';
import { Grid, Row, Col } from 'react-bootstrap';
import FacebookLoginStatus from '../components/FacebookLoginStatus.jsx';
import Chart from '../components/Chart';
import SelectButtons from '../components/SelectButtons';
import StatisticPanelBigTop from '../components/StatisticPanelBigTop';
import ChatSmall from '../components/ChartSmall';

const cookies = new Cookies();
var axios = require('axios');

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.error = this.error.bind(this);
  }

  error(){
    cookies.remove('market_user_co', { path: '/', secure: true });
    window.location = '/';
  }

  componentDidMount(){
    var this_=this;
    var response_params = {method: 'post',
      url: 'https://'+process.env.HOST_RAILS+'/api/users/verification'};

    var token_cookie = cookies.get('market_user_co');
    if (token_cookie){
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
    const {g_chart, g_percents} = this.props;
    return (
    <div>
      <FacebookLoginStatus
      facebookApi={ process.env.FACEBOOK_API }
      linkToDashboard = '/dashboard'
      linkToLogin = '/facebook'
      history = {this.props.history}
      />
      <Grid>
        <Row className="show-grid">
          <Col sm={12}>
            <Logout facebook_logout={true}/>
            <br/><br/>
            Dashboard
          </Col>
        </Row>
      </Grid>
      <Grid fluid={true}>
        <Row className="show-grid">
          <Col sm={12}>
            <br/><br/>
            <SelectPanel/>
            <SelectButtons/>
            <StatisticPanelBigTop/>
            <Chart/>
          </Col>
        </Row>
      </Grid>
      <Grid fluid={true}>
        <Row className="show-grid">
          <Col sm={6}>
            <ChatSmall
              graphic = {g_chart.cost_per_action_array}
              lineColor = 'rgba(92,161,71,1)'
              commonNumber = {['$',g_chart.average_action_price]}
              days = {g_chart.days}
              label = 'COST PER ACTION'
              g_percents_array = {g_percents.cost_per_action}
            />
          </Col>
          <Col sm={6}>
            <ChatSmall
            graphic = {g_chart.action_rate_array}
            lineColor = 'rgba(255,17,134,1)'
            commonNumber = {[g_chart.average_action_rate,'%']}
            days = {g_chart.days}
            label = 'ACTION RATE'
            g_percents_array = {g_percents.action_rate}
            />
          </Col>
        </Row>
        <Row className="show-grid">
          <Col sm={6}>
            <ChatSmall
            graphic = {g_chart.clicks_array}
            lineColor = 'rgba(255,78,39,1)'
            commonNumber = {g_chart.clicks}
            days = {g_chart.days}
            label = 'CLICKS'
            g_percents_array = {g_percents.clicks}
            />
          </Col>
          <Col sm={6}>
            <ChatSmall
            graphic = {g_chart.click_through_rate_array}
            lineColor = 'rgba(255,78,39,1)'
            commonNumber = {[g_chart.average_click_through_rate, '%']}
            days = {g_chart.days}
            label = 'CLICK THROUGH RATE'
            g_percents_array = {g_percents.click_through_rate}
            />
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
  g_chart: state.chart,
  g_percents: state.chartPercent
}),
dispatch => ({
  g_tokenChange: (token) => {
    dispatch({ type: 'CURRENT_TOKEN_CHANGE', payload: token });
  }
})
)(Dashboard);