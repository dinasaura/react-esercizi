import React, { useState, useEffect } from 'react';

function ClickCounterUseEffect({ onCounterChange }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    onCounterChange(count);
  }, [count, onCounterChange]);

  const handleIncrement = () => {
    setCount(prevCount => prevCount + 1);
  };

  return (
    <div>
      <p>Conteggio: {count}</p>
      <button onClick={handleIncrement}>Incrementa</button>
    </div>
  );
}

export default ClickCounterUseEffect;
