import React, { useState } from 'react';

function TodoList({ render }) {
  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const gestioneAddItem = () => {
    if (inputValue.trim() !== '') {
      setItems([...items, inputValue]);
      setInputValue('');
    }
  };

  const gestioneReset = () => {
    setItems([]);
  };

  const removeItem = (index) => {
    const updatedItems = items.filter((_, i) => i !== index);
    setItems(updatedItems);
  };

  return (
    <div>
      <h2>Todo List</h2>
      {render(items, removeItem)}
      <div>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button onClick={gestioneAddItem}>Add Item</button>
        <button onClick={gestioneReset}>Reset</button>
      </div>
    </div>
  );
}

export default TodoList;
