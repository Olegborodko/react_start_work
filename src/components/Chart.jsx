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
    const {g_chart} = this.props;
    // const {selectValue} = this.state;
    var datasets_now = [];
    datasets_now.push(
    {
      label: "Cost",
      fillColor: "rgba(220,220,220,0.2)",
      strokeColor: "rgba(220,220,220,1)",
      pointColor: "rgba(220,220,220,1)",
      pointStrokeColor: "#fff",
      pointHighlightFill: "#fff",
      pointHighlightStroke: "rgba(220,220,220,1)",
      data: g_chart.spends_array
    },
    {
      label: "Clicks",
      fillColor: "rgba(220,220,220,0.2)",
      strokeColor: "rgba(220,220,220,1)",
      pointColor: "rgba(220,220,220,1)",
      pointStrokeColor: "#fff",
      pointHighlightFill: "#fff",
      pointHighlightStroke: "rgba(220,220,220,1)",
      data: g_chart.clicks_array
    },
    {
      label: "Impressions",
      fillColor: "rgba(220,220,220,0.2)",
      strokeColor: "rgba(220,220,220,1)",
      pointColor: "rgba(220,220,220,1)",
      pointStrokeColor: "#fff",
      pointHighlightFill: "#fff",
      pointHighlightStroke: "rgba(220,220,220,1)",
      data: g_chart.impressions_array
    },
    {
      label: "Actions",
      fillColor: "rgba(220,220,220,0.2)",
      strokeColor: "rgba(220,220,220,1)",
      pointColor: "rgba(220,220,220,1)",
      pointStrokeColor: "#fff",
      pointHighlightFill: "#fff",
      pointHighlightStroke: "rgba(220,220,220,1)",
      data: g_chart.actions_array
    }
    );

    var chartData = {
      labels: g_chart.days,
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
      <LineChart data={chartData} options={chartOptions} redraw/>
    </div>
    );
  }
}

export default connect(
state => ({
  g_chart: state.chart
}),
dispatch => ({
  // g_tokenChange: (token) => {
  //   dispatch({ type: 'CURRENT_TOKEN_CHANGE', payload: token });
  // }
})
)(Chart);