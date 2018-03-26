import React, { Component } from 'react';

class Users extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
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
        this_.setState({
          data: response.data
        });
      }

    });
    //console.log(window.FB);

    //console.log(window.store.getState());
  }

  render() {
    const {data} = this.state;
    //const {search_by_name, data_by_name, data, bounty_program} = this.state;
    return (
    <div>
      <select>
      {data.length>0 && data.map((key, idx) => {
        return (
        <option key={idx} value={key.name}>
          {key.name}
        </option>
        );
      })}

      </select>
    </div>
    );
  }
}

export default Users;