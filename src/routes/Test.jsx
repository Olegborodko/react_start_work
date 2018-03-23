import React, { Component } from 'react';

class Test extends Component {
  render() {
    return (
    <div>
      {console.log('bbbbb:' + this.props.globalState)}
    </div>
    );
  }
}

export default Test;