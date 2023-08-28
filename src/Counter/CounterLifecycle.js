import React, { Component } from 'react';
import CounterDisplay from './CounterDisplay'; 

class CounterLifecycle extends Component {
  state = {
    count: this.props.valoreIniziale || 0
  };
  
//   il costructor in questo caso non e' piu neccessario

  componentDidMount() {
    this.intervallo = setInterval(() => {
      this.setState(statoPrecedente => ({
        count: statoPrecedente.count + (this.props.incrementoQuantità || 1)
      }));
    }, this.props.incrementoIntervallo || 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervallo);
  }

  render() {
    return <CounterDisplay count={this.state.count} />;
  }
}

export default CounterLifecycle;
