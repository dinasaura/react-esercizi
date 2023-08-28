import React from 'react';
import AgeExtract from './AgeExtract';

function SecondProp(props) {
    const { name, age } = props;

    // const isAgeInRange = age > 18 && age < 65;
    const isAgeInRange =   age < 65;
    const isNameJohn = name === "John";
  return (
    <div>
      <p>Welcome, {props.name}!</p>
      {/* {props.age > 18 && <AgeExtract age={props.age} />}  se e' maggiore di 18 */}
      {/* {props.age && <AgeExtract age={props.age} />} se e' presente */}

      {/* {props.age > 18 && props.age < 65 && <AgeExtract age={props.age} />} */}
      {/* è superiore a 18 e inferiore a 65 */}

      {isAgeInRange && isNameJohn && <AgeExtract age={age} />}
      {/* è maggiore di 18 e minore di 65 e il prop Nome è uguale a "John". */}
      
    </div>
  );
}


SecondProp.defaultProps = {
  name: <strong> Luca </strong>,
  age: null
};

export default SecondProp;

//per l'esercizio dopo aggiungiamo direttamente <strong></strong> in questo modo
