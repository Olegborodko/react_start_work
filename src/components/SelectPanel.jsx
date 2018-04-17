import React, { Component } from 'react';
import Select from './Select';
import { connect } from 'react-redux';
import { g_campaignsRequest } from '../actions/campaigns';
import { g_adsRequest } from '../actions/ads';

class selectPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userIndex: 0,
      campaignIndex: 0
    };

    this.changeUser = this.changeUser.bind(this);
    this.changeCampaign = this.changeCampaign.bind(this);
    this.changeAd = this.changeAd.bind(this);
  }

  changeUser(userIndex){
    this.props.g_compaignsRequest(this.props.g_users, userIndex, this.state.campaignIndex);
    this.setState({
      userId: userIndex
    });
  }

  changeCampaign(campaignIndex){
    this.props.g_adsRequest(this.props.g_campaigns, campaignIndex);
    this.setState({
      campaignIndex: campaignIndex
    });
  }

  changeAd(adIndex){

  }

  render() {
    const {g_users, g_campaigns, g_ads} = this.props;
    return (
    <div>
      <div>
        <Select
          data={ g_users }
          changeUser = { this.changeUser }
        />
        <Select
          data={ g_campaigns }
          changeUser = { this.changeCampaign }
        />
        <Select
          data={ g_ads }
          changeUser = { this.changeAd }
        />
      </div>
    </div>
    );
  }
}

export default connect(
state => ({
  g_users: state.users,
  g_campaigns: state.campaigns,
  g_ads: state.ads
}),
dispatch => ({
  g_compaignsRequest: (g_users, userIndex, campaignIndex) => {
    dispatch(g_campaignsRequest(g_users, userIndex, campaignIndex));
  },
  g_adsRequest: (g_campaigns, campaignIndex) => {
    dispatch(g_adsRequest(g_campaigns, campaignIndex));
  }
})
)(selectPanel);