import React, { Component } from 'react';

import { connect } from 'react-redux';

class MainLayout extends Component {

  render() {
    return (
    <div>

      {this.props.children}
    </div>
    );
  }
}

export default connect(
  state => ({

  }),
  dispatch => ({

  })
)(MainLayout);