import './App.css';
import React from 'react';
import Welcome from './Welcome'; 
import DefaultProps from './defaultProps';
import SecondProp from './SecondProp';

function App() {
  return (
    <div>
      <DefaultProps/>
      {/* <SecondProp name={<strong>John</strong>} age={30} /> */}
      <SecondProp name={'John'} age={18} />
    </div>
  );
}


export default App;
