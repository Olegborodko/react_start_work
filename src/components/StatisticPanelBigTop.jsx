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
    const {g_statistic} = this.props;
    // var actionsSum = 0;
    if (g_statistic.length>0){
      g_statistic.map((key, idx) => {
        //actionsSum += parseInt(key.value);
        console.log(key);
      })
    }
    return (
    <div>
      <ul className="bigTopPanel">
        <li>{} <br/> COST</li>
        <li>{} <br/> IMPRESSIONS</li>
        <li>{} <br/> CLICKS</li>
        {/* actionsSum === 0 &&
          <li><br/> ACTIONS</li>
        */}
        {/*actionsSum !== 0 &&
          <li>{actionsSum} <br/> ACTIONS</li>
        */}
      </ul>
    </div>
    );
  }
}

export default connect(
state => ({
  g_statistic: state.Statistics
}),
dispatch => ({
  // g_tokenChange: (token) => {
  //   dispatch({ type: 'CURRENT_TOKEN_CHANGE', payload: token });
  // }
})
)(StatisticPanelBigTop);