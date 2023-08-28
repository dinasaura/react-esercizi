import React, { Component } from 'react';

class ClickTracker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lastPressed: 'None'
    };
  }

  buttonClick = event => {
    const lastButton = event.target.innerText;
    this.setState({
      lastPressed: lastButton
    });
  };

  render() {
    return (
      <div>
        <button onClick={this.buttonClick}>Button 1</button>
        <button onClick={this.buttonClick}>Button 2</button>
        <button onClick={this.buttonClick}>Button 3</button>
        <h3>Last Button: {this.state.lastPressed}</h3>
      </div>
    );
  }
}

export default ClickTracker;
