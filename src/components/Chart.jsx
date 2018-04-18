import React, { Component } from 'react';
import { connect } from 'react-redux';
var LineChart = require("react-chartjs").Line;
// import Cookies from 'universal-cookie';
// var axios = require('axios');
// const cookies = new Cookies();

class Chart extends Component {
  constructor(props) {
    super(props);
    //const data = props.data;
    // this.state = {
    //   selectValue: ''
    // };

    this.logoutF = this.logoutF.bind(this);
  }

  logoutF(){

  }

  render() {
    // const {data} = this.props;
    // const {selectValue} = this.state;
    var datasets_now = [];
    datasets_now.push({  //min-max line
      data:[0,10,20,30,40,50,60,70,80,90,100, 100],
      fill: false,
      showLine: false,
      pointRadius: 0
    });

    var chartData = {
      label: 'test',
      fill: false,
      showLine: true,
      labels: ['JAN','FEB','MAR','APR','MAY','JUN','JUL','AUG','SEP','OCT','NOV','DEC'],
      datasets: datasets_now
    };
    var chartOptions = {
      responsive: true,
      legend: false
    };
    return (
    <div className="chart">
      <LineChart data={chartData} options={chartOptions}/>
    </div>
    );
  }
}

export default connect(
state => ({
  // g_token: state.currentUser
}),
dispatch => ({
  // g_tokenChange: (token) => {
  //   dispatch({ type: 'CURRENT_TOKEN_CHANGE', payload: token });
  // }
})
)(Chart);