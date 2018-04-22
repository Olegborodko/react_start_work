import React, { Component } from 'react';
import Select from './Select';
import { connect } from 'react-redux';
import { g_campaignsRequest } from '../actions/campaigns';
import { g_adsRequest } from '../actions/ads';
import { g_advertRequest } from '../actions/advert';
import PreloaderIcon from 'react-preloader-icon';
import Oval from 'react-preloader-icon/loaders/Oval';

class selectPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userIndex: 0,
      campaignIndex: 0,
      adIndex : 0,
      advertIndex : 0
    };

    this.changeUser = this.changeUser.bind(this);
    this.changeCampaign = this.changeCampaign.bind(this);
    this.changeAd = this.changeAd.bind(this);
    this.changeAdvert = this.changeAdvert.bind(this);
  }

  changeUser(userIndex){
    this.props.g_compaignsRequest(this.props.g_users,
                                  userIndex,
                                  this.state.campaignIndex,
                                  this.state.adIndex);
    this.props.g_userChange(userIndex);
    this.setState({
      userId: userIndex
    });
  }

  changeCampaign(campaignIndex){
    this.props.g_adsRequest(this.props.g_campaigns,
                            campaignIndex,
                            this.state.adIndex);
    this.props.g_campaignChange(campaignIndex);
    this.setState({
      campaignIndex: campaignIndex
    });
  }

  changeAd(adIndex){
    this.props.g_advertRequest(this.props.g_ads, adIndex);
    this.props.g_adsChange(adIndex);
    this.setState({
      adIndex: adIndex
    });
  }

  changeAdvert(advertIndex){
    this.props.g_adChange(advertIndex);
    this.setState({
      advertIndex: advertIndex
    });
  }

  render() {
    const {g_users, g_campaigns, g_ads, g_adverts, g_preloaderWidth} = this.props;
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
        <Select
        data={ g_adverts }
        changeUser = { this.changeAdvert }
        />
        <PreloaderIcon
        loader={Oval}
        size={32}
        strokeWidth={g_preloaderWidth} // min: 1, max: 50
        strokeColor="#F0AD4E"
        duration={800}
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
  g_ads: state.ads,
  g_adverts: state.adverts,
  g_preloaderWidth: state.currentUser.preloaderWidth
}),
dispatch => ({
  g_compaignsRequest: (g_users, userIndex, campaignIndex, adIndex) => {
    dispatch(g_campaignsRequest(g_users, userIndex, campaignIndex, adIndex));
  },
  g_adsRequest: (g_campaigns, campaignIndex, adIndex) => {
    dispatch(g_adsRequest(g_campaigns, campaignIndex, adIndex));
  },
  g_advertRequest: (g_adverts, adIndex) => {
    dispatch(g_advertRequest(g_adverts, adIndex));
  },
  g_userChange: (index) => {
    dispatch({ type: 'CURRENT_USER_CHANGE', payload: index });
  },
  g_campaignChange: (index) => {
    dispatch({ type: 'CURRENT_CAMPAIGN_CHANGE', payload: index });
  },
  g_adsChange: (index) => {
    dispatch({ type: 'CURRENT_ADS_CHANGE', payload: index });
  },
  g_adChange: (index) => {
    dispatch({ type: 'CURRENT_AD_CHANGE', payload: index });
  }
})
)(selectPanel);