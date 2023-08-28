import React, { useState, useEffect } from 'react';

function ClickCounterUseEffect2() {
  const [count, setCount] = useState(0);

  
  useEffect(() => {
    const interval = setInterval(() => {
      setCount(prevCount => prevCount + 1);
    }, 1000);

    
    return () => {
      clearInterval(interval);
    };
  }, []); 

  return (
    <div>
      <p>Conteggio: {count}</p>
    </div>
  );
}

export default ClickCounterUseEffect2;

