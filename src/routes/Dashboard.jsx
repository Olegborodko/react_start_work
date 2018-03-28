import React, { Component } from 'react';
import SelectPanel from '../components/SelectPanel';

class Dashboard extends Component {
  render() {
  //  const {campaignsGlobal, initialApi, usersGlobal} = this.props;

    return (
    <div>
      Dashboard
       <br/><br/>
        <SelectPanel/>
    </div>
    );
  }
}

export default Dashboard;