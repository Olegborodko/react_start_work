import React, { Component } from 'react';
import { connect } from 'react-redux';
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
  }

  company_Statistics(){

  }

  ads_Statistics(){

  }

  advertise_Statistics(){

  }

  render() {
    // const {data} = this.props;
    // const {selectValue} = this.state;
    return (
    <div className="selectButtonsStatistics">
      <div className="btn_class" onClick={this.company_Statistics}>Company statistics</div>
      <div className="btn_class" onClick={this.ads_Statistics}>Advertises statistics</div>
      <div className="btn_class" onClick={this.advertise_Statistics}>Advertise statistics </div>
    </div>
    );
  }
}

export default connect(
state => ({
  // g_token: state.currentUser
}),
dispatch => ({
  // g_tokenChange: (token) => {
  //   dispatch({ type: 'CURRENT_TOKEN_CHANGE', payload: token });
  // }
})
)(SelectButtons);