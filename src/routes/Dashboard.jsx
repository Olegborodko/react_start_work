import React, { Component } from 'react';
import Users from '../components/Users';
import { connect } from 'react-redux';

class Dashboard extends Component {
  render() {
    return (
    <div>
      Dashboard
       <br/><br/>
      {this.props.initialApi.access &&
      <Users token={this.props.initialApi.token} />
      }
    </div>
    );
  }
}

export default connect(
state => ({
  initialApi: state.initialApi
})
)(Dashboard);