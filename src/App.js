import './App.css';
import React from 'react';
import Welcome from './Welcome'; 
import DefaultProps from './defaultProps';
import SecondProp from './SecondProp';

function App() {
  return (
    <div>
      <Welcome name="Alice" />
      <DefaultProps/>
      <SecondProp name={<strong>Alice</strong>} age={30} />
    </div>
  );
}


export default App;
