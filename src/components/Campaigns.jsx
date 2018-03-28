import React, { Component } from 'react';
import { connect } from 'react-redux';

class Campaigns extends Component {
  constructor(props) {
    super(props);
    this.request = this.request.bind(this);
  }

  componentWillMount() {
    this.request();

  }

  request(){
    // var ad_account_id = this.props.usersGlobal[this.props.currentIdGlobal.user].id;
    // window.FB.api('/'+ad_account_id+'/campaigns?fields=name,objective', 'get', {}, (response) => {
    //   if (response.error) {
    //     console.log(response.error)
    //   }else{
    //     this.props.globalCampaignsChange(response.data);
    //   }
    // });
  }

  render() {
    const {campaignsGlobal} = this.props;
    //const {search_by_name, data_by_name, data, bounty_program} = this.state;
    return (
    <div>
      <select>
        {campaignsGlobal.length>0 && campaignsGlobal.map((key, idx) => {
          return (
          <option key={idx} value={key.id}>
            {key.name}
          </option>
          );
        })}

      </select>
    </div>
    );
  }
}

export default connect(
state => ({
  usersGlobal: state.users,
  currentIdGlobal: state.currentId,
  campaignsGlobal: state.campaigns,
  userTrigger: state.trigger.user
}),
dispatch => ({
  globalCampaignsChange: (trackName) => {
    dispatch({ type: 'CAMPAIGNS_CHANGE', payload: trackName });
  }
})
)(Campaigns);