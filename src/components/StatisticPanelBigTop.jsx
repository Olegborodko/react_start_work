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
    const {g_chart} = this.props;
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
        <li>{g_chart.spends} <br/> COST</li>
        <li>{g_chart.impressions} <br/> IMPRESSIONS</li>
        <li>{g_chart.clicks} <br/> CLICKS</li>
        <li>{g_chart.actions} <br/> ACTIONS</li>
      </ul>
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
)(StatisticPanelBigTop);