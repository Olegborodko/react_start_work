import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Line} from 'react-chartjs-2';

class ChartSmall extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {g_chart} = this.props;

    var datasets_now = [];
    datasets_now.push(
    {
      label: "Cost per action",
      data: g_chart.cost_per_action_array,
      borderColor: 'rgba(92,161,71,1)',
      pointRadius: 5,
      pointHoverRadius: 10,
      backgroundColor: 'transparent'
    }
    );

    var chartData = {
      type: 'line',
      labels: g_chart.days,
      datasets: datasets_now,
    };

    var chartOptions = {
      responsive: true,
      maintainAspectRatio: false,
      tooltips: {
        mode: 'index',
        intersect: false
      }
    };
    return (
    <div>
      <ul className="bigTopPanel">
        <li>{g_chart.average_action_price} $ <br/> COST PER ACTION</li>
      </ul>
      <div className="chart">
        <Line data={chartData} options={chartOptions} redraw/>
      </div>
    </div>
    );
  }
}

export default connect(
state => ({
  g_chart: state.chart
}),
dispatch => ({

})
)(ChartSmall);