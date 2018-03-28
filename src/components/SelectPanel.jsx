import React, { Component } from 'react';
import Users from './Users';
import Campaigns from './Campaigns';
import Select from './Select';
import Requests from './Requests';
import { connect } from 'react-redux';

class selectPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: 0
    };

    this.changeUser = this.changeUser.bind(this);
  }

  changeUser(userId){
    this.setState({
      userId: userId
    });
  }

  render() {
    const {usersGlobal} = this.props;

    return (
    <div>
      <div>
        <Select
          data={usersGlobal}
          changeUser = { this.changeUser }
        />
        {/*<Users token={this.props.initialApi.token}/>*/}
        {/*<br/>*/}
        {/*<br/>*/}
        {/*{usersGlobal.length>0 &&*/}
        {/*<Campaigns/>*/}
        {/*}*/}
      </div>
      <Requests/>
    </div>
    );
  }
}

export default connect(
state => ({
  usersGlobal: state.users,
  campaignsGlobal: state.campaigns
})
)(selectPanel);