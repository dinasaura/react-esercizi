import React, { useState } from 'react';

function TodoList() {
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
    const aggItems = items.filter((_, i) =>  i !== index);
    setItems(aggItems);
  }

  return (
    <div>
      <h2>Todo List</h2>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => removeItem(index)}>Remove</button>
          </li>
        ))}
      </ul>
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
