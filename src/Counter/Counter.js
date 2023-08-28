import React, { Component } from 'react';
import CounterDisplay from './CounterDisplay';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: props.valIniziale || 0
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState(prevState => ({
        count: prevState.count + (this.props.incrementQuantita || 1)
      }));
    }, this.props.incrementInterval || 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return <CounterDisplay count={this.state.count} />
  }
}

export default Counter;
