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
    const {g_spend, g_impressions, g_clicks, g_actions} = this.props;
    var actionsSum = 0;
    if (g_actions.length>0){
      g_actions.map((key, idx) => {
        actionsSum += parseInt(key.value);
      })
    }
    return (
    <div>
      <ul className="bigTopPanel">
        <li>{g_spend} <br/> COST</li>
        <li>{g_impressions} <br/> IMPRESSIONS</li>
        <li>{g_clicks} <br/> CLICKS</li>
        {actionsSum === 0 &&
          <li><br/> ACTIONS</li>
        }
        {actionsSum !== 0 &&
          <li>{actionsSum} <br/> ACTIONS</li>
        }
      </ul>
    </div>
    );
  }
}

export default connect(
state => ({
  g_spend: state.Statistics.spend,
  g_impressions: state.Statistics.impressions,
  g_clicks: state.Statistics.clicks,
  g_actions: state.Statistics.actions
}),
dispatch => ({
  // g_tokenChange: (token) => {
  //   dispatch({ type: 'CURRENT_TOKEN_CHANGE', payload: token });
  // }
})
)(StatisticPanelBigTop);