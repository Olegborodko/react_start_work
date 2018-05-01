import React, { Component } from 'react';
import { connect } from 'react-redux';
import Cookies from 'universal-cookie';
var axios = require('axios');
const cookies = new Cookies();

class AdsTable extends Component {
  constructor(props) {
    super(props);
    //const data = props.data;
    // this.state = {
    //   selectValue: ''
    // };
    
    //this.logoutF = this.logoutF.bind(this);
  }
  
  // logoutF(){
  // }
  
  render() {
    const {g_adsTable} = this.props;
    var listItems;
    
    listItems = g_adsTable.map((key, idx) => {
      return (
        <tr key={idx} className="t_body">
          <td className="name">{key.name}</td>
          <td className="impressions">{key.impressions}</td>
          <td className="clicks">{key.clicks}</td>
          <td className="ctr">{key.ctr}%</td>
          <td className="cpc">${key.cpc}</td>
          <td className="spend">${key.spend}</td>
          <td className="actions">{key.actions}</td>
          <td className="act_rate">{key.act_rate}%</td>
          <td className="cost_act">${key.cost_act}</td>
        </tr>
      );
    });
    
    return (
      <div>
        {g_adsTable && g_adsTable.length > 0 && (
          <table className="ads_table">
            <tbody>
            <tr className="t_title">
              <td>AD SET</td>
              <td>IMPRESSIONS</td>
              <td>CLICKS</td>
              <td>CTR</td>
              <td>CPC</td>
              <td>COST</td>
              <td>ACTS.</td>
              <td>ACT.RATE</td>
              <td>COST/ACT.</td>
            </tr>
              {listItems}
            </tbody>
          </table>
        )}
      </div>
    );
  }
}

export default connect(
  state => ({
    g_adsTable: state.adsTable
  }),
  dispatch => ({
    // g_tokenChange: (token) => {
    //   dispatch({ type: 'CURRENT_TOKEN_CHANGE', payload: token });
    // }
  })
)(AdsTable);