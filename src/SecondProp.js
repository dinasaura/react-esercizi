import React from 'react';

function SecondProp(props) {
  return (
    <div>
      <p>Welcome, {props.name}!</p>
      <p>Your age is {props.age}.</p>
    </div>
  );
}

SecondProp.defaultProps = {
  name: <strong> Luca </strong>,
  age: '18'
};

export default SecondProp;

//per l'esercizio dopo aggiungiamo direttamente <strong></strong> in questo modo
