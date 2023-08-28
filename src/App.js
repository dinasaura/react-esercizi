import './App.css';
import React from 'react';
import DefaultProps from './Welcome/defaultProps';
import SecondProp from './Welcome/SecondProp';
import Counter from './Counter/Counter';
import ClickCounter from './Counter/ClickCounter';
import ClickTracker from './Counter/ClickTracker';
// import CounterLifecycle from './CounterLifecycle';
  

function App() {
  return (
    <div>
      <DefaultProps/>
      {/* <SecondProp name={<strong>John</strong>} age={30} /> */}
      <SecondProp name={'John'} age={18} />
      <Counter valIniziale={5} incrementInterval={500} incrementQuantita={2} />
      <ClickCounter/>
      <ClickTracker/>
    </div>
  );
}


export default App;
