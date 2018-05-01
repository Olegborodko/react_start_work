import React, { Component } from 'react';
import { connect } from 'react-redux';
import { g_Statistics } from '../actions/statistics';
import { g_adsTable } from '../actions/adsTable';
// import Cookies from 'universal-cookie';
// var axios = require('axios');
// const cookies = new Cookies();

class SelectButtons extends Component {
  constructor(props) {
    super(props);
    //const data = props.data;
    // this.state = {
    //   selectValue: ''
    // };

    this.company_Statistics = this.company_Statistics.bind(this);
    this.ads_Statistics = this.ads_Statistics.bind(this);
    this.advertise_Statistics = this.advertise_Statistics.bind(this);
    this.advertise_Table_Refresh = this.advertise_Table_Refresh.bind(this);
  }

  company_Statistics(){
    this.props.g_PreloaderTrue();
    this.props.g_Statistics(this.props.g_campaigns, this.props.g_campaignIndex);
  }

  ads_Statistics(){
    this.props.g_PreloaderTrue();
    this.props.g_Statistics(this.props.g_ads, this.props.g_adsIndex);
  }

  advertise_Statistics(){
    this.props.g_PreloaderTrue();
    this.props.g_Statistics(this.props.g_ad, this.props.g_adIndex);
  }
  
  advertise_Table_Refresh(){
    this.props.g_adsTable(this.props.g_ad);
  }

  render() {
    const {g_campaigns, g_ads, g_ad} = this.props;
    // const {selectValue} = this.state;
    return (
    <div className="selectButtonsStatistics">
      {g_campaigns.length !== 0 &&
        <div className="sign_in" onClick={this.company_Statistics}>Company statistics</div>
      }
      {g_ads.length !== 0 &&
        <div className="sign_in" onClick={this.ads_Statistics}>Advertises statistics</div>
      }
      {g_ad.length !== 0 &&
        <div className="sign_in" onClick={this.advertise_Statistics}>Advertise statistics </div>
      }
      {g_ad.length !== 0 &&
        <div className="sign_in" onClick={this.advertise_Table_Refresh}>Refresh advertise table</div>
      }
    </div>
    );
  }
}

export default connect(
state => ({
  g_campaigns: state.campaigns,
  g_campaignIndex: state.currentUser.campaign,
  g_ads: state.ads,
  g_adsIndex: state.currentUser.ads,
  g_ad: state.adverts,
  g_adIndex: state.currentUser.ad
}),
dispatch => ({
  g_Statistics: (g_set, index) => {
    dispatch(g_Statistics(g_set, index));
  },
  g_PreloaderTrue: () => {
    dispatch({ type: 'PRELOADER_TRUE' });
  },
  g_adsTable: (g_adverts) => {
    dispatch(g_adsTable(g_adverts));
  }
})
)(SelectButtons);