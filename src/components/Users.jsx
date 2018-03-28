import React, { Component } from 'react';
import { connect } from 'react-redux';

class Users extends Component {
  constructor(props) {
    super(props);
    this.selectChange = this.selectChange.bind(this);
  }

  componentWillMount() {
    // window.FB.Event.subscribe('auth.statusChange', (response) => {
    //
    // });

    // window.FB.getLoginStatus(function(response) {
    //   console.log(response);
    // });
    var this_ = this;

    window.FB.api('/me/adaccounts?fields=name', 'get', {access_token: this.props.token}, (response) => {
      if (response.error) {
        console.log(response.error)
      }else{
        this_.props.globalStateChange(response.data);
      }
    });
    //console.log(window.FB);
    //console.log(window.store.getState());
  }

  selectChange(event){
    this.props.globalCurrentUserChange(event.target.value);
    this.props.globalUserTrigger(true);
  }

  render() {
    const {usersGlobal, globalCurrentUser} = this.props;
    // if (access){
    //   this.request();
    // }
    //const {search_by_name, data_by_name, data, bounty_program} = this.state;
    return (
    <div>
      <select onChange={this.selectChange} value={globalCurrentUser.user}>
        {usersGlobal.map((key, idx) => {
          return (
          <option key={idx} value={idx}>
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
  globalCurrentUser: state.currentId
}),
dispatch => ({
  globalStateChange: (trackName) => {
    dispatch({ type: 'USERS_CHANGE', payload: trackName });
  },
  globalCurrentUserChange: (trackName) => {
    dispatch({ type: 'CURRENT_USER_CHANGE', payload: trackName });
  },
  globalUserTrigger: (trackName) => {
    dispatch({ type: 'USER_STATUS', payload: trackName });
  }
})
)(Users);