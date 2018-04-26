import React, { Component } from 'react';
import { connect } from 'react-redux';
// import Cookies from 'universal-cookie';
// var axios = require('axios');
// const cookies = new Cookies();

class StatisticPanelBigTop extends Component {
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
    const {g_chart, g_percents} = this.props;
    // var actionsSum = 0;
    // if (g_statistic.length>0){
    //   g_statistic.map((key, idx) => {
    //     //actionsSum += parseInt(key.value);
    //     console.log(key);
    //   })
    // }
    return (
    <div>
      <ul className="bigTopPanel">
        <li>
          <span className="statisticBig">${(g_chart.spends).toFixed(2)}</span>
          <span className={"statisticSmall " + g_percents.spends[1]}>{g_percents.spends[0]}</span>
          <br/>
          COST
        </li>
        <li>
          <span className="statisticBig">{g_chart.impressions}</span>
          <span className={'statisticSmall ' + g_percents.impressions[1]}>{g_percents.impressions[0]}</span>
          <br/>
          IMPRESSIONS
        </li>
        <li>
          <span className="statisticBig">{g_chart.clicks}</span>
          <span className={"statisticSmall " + g_percents.clicks[1]}>{g_percents.clicks[0]}</span>
          <br/>
          CLICKS
        </li>
        <li>
          <span className="statisticBig">{g_chart.actions}</span>
          <span className={"statisticSmall " + g_percents.actions[1]}>{g_percents.actions[0]}</span>
          <br/>
          ACTIONS
        </li>
      </ul>
    </div>
    );
  }
}

export default connect(
state => ({
  g_chart: state.chart,
  g_percents: state.chartPercent
}),
dispatch => ({
  // g_tokenChange: (token) => {
  //   dispatch({ type: 'CURRENT_TOKEN_CHANGE', payload: token });
  // }
})
)(StatisticPanelBigTop);