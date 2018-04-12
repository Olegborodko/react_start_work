import React, { Component } from 'react';
import SelectPanel from '../components/SelectPanel';
import { connect } from 'react-redux';
import Logout from '../components/Logout';

class Dashboard extends Component {
  componentDidMount(){
    if (this.props.g_urlHistory.length===0){
      window.location = '/';
    }
  }

  render() {
  //  const {campaignsGlobal, initialApi, usersGlobal} = this.props;
    return (
    <div>
      <Logout/>
      <br/><br/>
      Dashboard

       <br/><br/>
        <SelectPanel/>
    </div>
    );
  }
}

export default connect(
state => ({
  g_users: state.users,
  g_urlHistory: state.urlHistory,
  // g_ads: state.ads
}),
dispatch => ({
  // g_compaignsRequest: (g_users, userIndex, campaignIndex) => {
  //   dispatch(g_campaignsRequest(g_users, userIndex, campaignIndex));
  // },
  // g_adsRequest: (g_campaigns, campaignIndex) => {
  //   dispatch(g_adsRequest(g_campaigns, campaignIndex));
  // }
})
)(Dashboard);