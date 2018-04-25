import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Line} from 'react-chartjs-2';

class ChartSmall extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {graphic,  lineColor, commonNumber, days, label} = this.props;

    var datasets_now = [];
    datasets_now.push(
    {
      label: label,
      data: graphic,  //
      borderColor: lineColor,     //
      pointRadius: 5,
      pointHoverRadius: 10,
      backgroundColor: 'transparent'
    }
    );

    var chartData = {
      type: 'line',
      labels: days,
      datasets: datasets_now,
    };

    var chartOptions = {
      responsive: true,
      maintainAspectRatio: false,
      tooltips: {
        mode: 'index',
        intersect: false
      },
      legend: {
        display: false
      }
    };
    return (
    <div className="chartSmall">
      <ul className="bigTopPanel">
        <li>{commonNumber}  <br/> {label}</li>
      </ul>
      <div className="chart">
        <Line data={chartData} options={chartOptions} redraw/>
      </div>
    </div>
    );
  }
}

export default ChartSmall;