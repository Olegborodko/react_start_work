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
    const {g_chartDays} = this.props;
    // const {selectValue} = this.state;
    var datasets_now = [];
    datasets_now.push({
      label: "My First dataset",
      fillColor: "rgba(220,220,220,0.2)",
      strokeColor: "rgba(220,220,220,1)",
      pointColor: "rgba(220,220,220,1)",
      pointStrokeColor: "#fff",
      pointHighlightFill: "#fff",
      pointHighlightStroke: "rgba(220,220,220,1)",
      data:[0,10,20,30,40,50,60,70,80,90,100, 100]
    });

    var chartData = {
      labels: g_chartDays,
      datasets: datasets_now,
    };

    var chartOptions = {
      //label: 'test',
      //type: 'line',
      //fill: false,
      //showLine: false,
      responsive: true,
      //legend: false,
    };
    return (
    <div className="chart">
      {console.log(g_chartDays)}
      <LineChart data={chartData} options={chartOptions} redraw/>
    </div>
    );
  }
}

export default connect(
state => ({
  // g_token: state.currentUser
  g_chartDays: state.chart.days
}),
dispatch => ({
  // g_tokenChange: (token) => {
  //   dispatch({ type: 'CURRENT_TOKEN_CHANGE', payload: token });
  // }
})
)(Chart);