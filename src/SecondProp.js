import React from 'react';
import AgeExtract from './AgeExtract';

function SecondProp(props) {
  return (
    <div>
      <p>Welcome, {props.name}!</p>
      <AgeExtract age={props.age} />
    </div>
  );
}


SecondProp.defaultProps = {
  name: <strong> Luca </strong>,
  age: ''
};

export default SecondProp;

//per l'esercizio dopo aggiungiamo direttamente <strong></strong> in questo modo
