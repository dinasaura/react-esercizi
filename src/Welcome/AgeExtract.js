import React from 'react';

function AgeExtract(props) {
    const { age } = props;

  if (age > 18) {
    return <p>Your age is :{age}</p>;
  } else {
    return <p>You are very young!</p>;
  }
}

export default AgeExtract;