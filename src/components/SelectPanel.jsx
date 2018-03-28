import React, { Component } from 'react';
import Select from './Select';
import { connect } from 'react-redux';
import { g_campaignsRequest } from '../actions/campaigns';

class selectPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: 0
    };

    this.changeUser = this.changeUser.bind(this);
    this.changeCampaign = this.changeCampaign.bind(this);
  }

  changeUser(userId){
    this.props.g_compaignsRequest(this.props.g_users, userId);
    this.setState({
      userId: userId
    });
  }

  changeCampaign(){

  }

  render() {
    const {g_users, g_campaigns} = this.props;

    return (
    <div>
      <div>
        <Select
          data={ g_users }
          changeUser = { this.changeUser }
        />
        <br/>
        <br/>
        <Select
        data={ g_campaigns }
        changeUser = { this.changeCampaign }
        />
      </div>
    </div>
    );
  }
}

export default connect(
state => ({
  g_users: state.users,
  g_campaigns: state.campaigns
}),
dispatch => ({
  g_compaignsRequest: (g_users, userId) => {
    dispatch(g_campaignsRequest(g_users, userId));
  }
})
)(selectPanel);