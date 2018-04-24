import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Line} from 'react-chartjs-2';
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
    var spend_max = Math.max(...g_chart.spends_array)*3;
    var click_max = Math.max(...g_chart.clicks_array)*5;
    var impression_max = Math.max(...g_chart.impressions_array)*1.2;
    var action_max = Math.max(...g_chart.actions_array)*8;

    var datasets_now = [];
    datasets_now.push(
    {
      label: "Cost",
      yAxisID: 'Cost',
      data: g_chart.spends_array,
      borderColor: 'rgba(92,161,71,1)',
      pointRadius: 5,
      pointHoverRadius: 10,
      backgroundColor: 'transparent'
    },
    {
      label: "Clicks",
      yAxisID: 'Clicks',
      data: g_chart.clicks_array,
      borderColor: 'rgba(255,78,39,1)',
      pointRadius: 5,
      pointHoverRadius: 10,
      backgroundColor: 'transparent'
    },
    {
      label: "Impressions",
      yAxisID: 'Impressions',
      data: g_chart.impressions_array,
      borderColor: 'rgba(255,17,134,1)',
      pointRadius: 5,
      pointHoverRadius: 10,
      backgroundColor: 'transparent'
    },
    {
      label: "Actions",
      yAxisID: 'Actions',
      data: g_chart.actions_array,
      borderColor: 'rgba(25,125,255,1)',
      pointRadius: 5,
      pointHoverRadius: 10,
      backgroundColor: 'transparent'
    },
    );

    var chartData = {
      type: 'line',
      labels: g_chart.days,
      datasets: datasets_now,
    };

    var chartOptions = {
      //label: 'test',
      //type: 'line',
      //fill: false,
      //showLine: false,
      responsive: true,
      //scaleOverride : true,
      //scaleSteps : 10,
      //scaleStepWidth : 50,
      //scaleStartValue : 0
      maintainAspectRatio: false,
      tooltips: {
        mode: 'index',
        intersect: false
      },
      scales: {
        yAxes: [{
          type: 'linear',
          position: 'left',
          id: 'Cost',
          ticks: {
            max: spend_max,
            min: 0
          },
          stacked: true
        }, {
          type: 'linear',
          position: 'left',
          id: 'Clicks',
          ticks: {
            max: click_max,
            min: 0
          },
          display:false
        },
          {
            type: 'linear',
            position: 'left',
            id: 'Impressions',
            ticks: {
              max: impression_max,
              min: 0
            },
            display:false
          },
          {
            type: 'linear',
            position: 'left',
            id: 'Actions',
            ticks: {
              max: action_max,
              min: 0
            },
            display:false
          }
        ]
      }

    };
    return (
    <div className="chart">
      <Line data={chartData} options={chartOptions} redraw/>
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