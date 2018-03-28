import React, { Component } from 'react';
import Users from '../components/Users';
import Campaigns from '../components/Campaigns';
import SelectPanel from '../components/SelectPanel';
import { connect } from 'react-redux';

class Dashboard extends Component {
  render() {
    const {campaignsGlobal, initialApi, usersGlobal} = this.props;

    return (
    <div>
      Dashboard
       <br/><br/>
        <SelectPanel/>
        {/*<Users token={this.props.initialApi.token}/>*/}
        {/*<br/>*/}
        {/*<br/>*/}
        {/*{usersGlobal.length>0 &&*/}
          {/*<Campaigns/>*/}
        {/*}*/}
    </div>
    );
  }
}

export default connect(
state => ({
  // usersGlobal: state.users,
  // campaignsGlobal: state.campaigns
})
)(Dashboard);