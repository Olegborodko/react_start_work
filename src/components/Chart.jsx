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
      yAxisID: 'Cost',
      fillColor: "rgba(220,220,220,0.2)",
      strokeColor: "rgba(220,220,220,1)",
      pointColor: "rgba(220,220,220,1)",
      pointStrokeColor: "#fff",
      pointHighlightFill: "#fff",
      pointHighlightStroke: "rgba(220,220,220,1)",
      data: g_chart.spends_array,
    },
    {
      label: "Clicks",
      yAxisID: 'Clicks',
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
      yAxisID: 'Impressions',
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
      yAxisID: 'Actions',
      fillColor: "rgba(220,220,220,0.2)",
      strokeColor: "rgba(220,220,220,1)",
      pointColor: "rgba(220,220,220,1)",
      pointStrokeColor: "#fff",
      pointHighlightFill: "#fff",
      pointHighlightStroke: "rgba(220,220,220,1)",
      data: g_chart.actions_array
    },
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
      //options.scales.xAxes[0].gridLines.display = false;

      //scaleOverride : true,
      //scaleSteps : 10,
      //scaleStepWidth : 50,
      //scaleStartValue : 0
      options : {
        scales : {
          xAxes : [ {
            gridLines : {
              display : false
            }
          } ]
        }
      },

      // options: {
      //   scales: {
      //     yAxes: [{
      //       id: 'Cost',
      //       type: 'linear',
      //       position: 'left',
      //     }, {
      //       id: 'Clicks',
      //       type: 'linear',
      //       position: 'left',
      //       ticks: {
      //         max: 1,
      //         min: 0,
      //         stepWidth: 2
      //       }
      //     },
      //       {
      //         id: 'Impressions',
      //         type: 'linear',
      //         position: 'left',
      //       },
      //       {
      //         id: 'Actions',
      //         type: 'linear',
      //         position: 'left',
      //       }]
      //   }
      // }

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