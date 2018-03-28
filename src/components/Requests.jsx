import React, { Component } from 'react';
import { connect } from 'react-redux';

class Requests extends Component {
  constructor(props) {
    super(props);
    //this.users = this.users.bind(this);
    this.campaigns = this.campaigns.bind(this);
  }

  campaigns(){
    if (this.props.usersGlobal.length>0) {
      var ad_account_id = this.props.usersGlobal[this.props.currentIdGlobal.user].id;
      window.FB.api('/'+ad_account_id+'/campaigns?fields=name,objective', 'get', {}, (response) => {
        if (response.error) {
          console.log(response.error)
        }else{
          this.props.globalCampaignsChange(response.data);
        }
      });
    }
  }

  userTrigger(){
    this.props.g_UsersTrigger(false);
  }

  render() {
    const {g_trigger} = this.props;
    //const {search_by_name, data_by_name, data, bounty_program} = this.state;

    if (g_trigger.users){
      this.userTrigger();
    }
    return (
    <div>

    </div>
    );
  }
}

export default connect(
state => ({
  usersGlobal: state.users,
  currentIdGlobal: state.currentId,
  g_trigger: state.trigger
}),
dispatch => ({
  globalStateChange: (trackName) => {
    dispatch({ type: 'USERS_CHANGE', payload: trackName });
  },
  globalCurrentUserChange: (trackName) => {
    dispatch({ type: 'CURRENT_USER_CHANGE', payload: trackName });
  },
  g_UsersTrigger: (trackName) => {
    dispatch({ type: 'USERS_REQUEST', payload: trackName });
  },
  globalCampaignsChange: (trackName) => {
    dispatch({ type: 'CAMPAIGNS_CHANGE', payload: trackName });
  }
})
)(Requests);