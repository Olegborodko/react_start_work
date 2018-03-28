import React, { Component } from 'react';

class Select extends Component {
  constructor(props) {
    super(props);
    //const data = props.data;
    this.state = {
      selectValue: ''
    };

    this.selectChange = this.selectChange.bind(this);
  }

  selectChange(event){
    this.props.changeUser(event.target.value);
    this.setState({
      selectValue: event.target.value
    })
  }

  render() {
    const {data} = this.props;
    const {selectValue} = this.state;

    return (
    <div>
      {data.length > 0 &&
      <select onChange={this.selectChange} value={selectValue}>
        {data.map((key, idx) => {
          return (
          <option key={idx} value={idx}>
            {key.name}
          </option>
          );
        })}
      </select>
      }
    </div>
    );
  }
}

export default Select;