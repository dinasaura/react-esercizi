//si li diamo un valore predefinito 
import React from 'react';

function DefaultProps(props) {
  return <p>Welcome, {props.name}!</p>;
}

DefaultProps.defaultProps = {
  name: 'Ospite' // Valore predefinito per la prop name se non viene fornito
};

export default DefaultProps;
