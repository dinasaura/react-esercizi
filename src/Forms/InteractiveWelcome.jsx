import React, { Component } from 'react';
import SecondProp from '../Welcome/SecondProp'; 

class InteractiveWelcome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputContent: ''
    };
  }

  handleInputChange = event => {
    this.setState({
      inputContent: event.target.value
    });
  };

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.inputContent}
          onChange={this.handleInputChange}
        />
        <SecondProp name={this.state.inputContent} />
      </div>
    );
  }
}

export default InteractiveWelcome;
