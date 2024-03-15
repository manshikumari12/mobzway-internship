import React, { useState } from 'react';
const List = () => {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState('');

  const handleChange = (e) => {
    setNewItem(e.target.value);
  };
  const addItem = () => {
    if (newItem.trim() !== '') {
      setItems([...items, { name: newItem, completed: false }]);
      setNewItem('');
    }
  };
  const toggleComplete = (index) => {
    const newItems = [...items];
    newItems[index].completed = !newItems[index].completed;
    setItems(newItems);
  };

  const clearCompleted = () => {
    const newItems = items.filter(item => !item.completed);
    setItems(newItems);
  };

  return (
    <div>
      <h2 style={{ textAlign: 'center' }}>Shopping List</h2>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {items.map((item, index) => (
          <li
            key={index}
            onClick={() => toggleComplete(index)}
            style={{
              textDecoration: item.completed ? 'line-through' : 'none',
              cursor: 'pointer',
              padding: '5px 10px',
              margin: '5px 0',
              borderRadius: '5px',
              backgroundColor: item.completed ? 'green' : 'transparent',
            }}
          >
            {item.name}
          </li>
        ))}
      </ul>
      <input
        type="text"
        value={newItem}
        onChange={handleChange}
        style={{ width: '100%', padding: '5px', marginBottom: '10px' }}
      />
      <button onClick={addItem} style={{ marginRight: '5px' }}>Add Item</button>
      <button onClick={clearCompleted}>Clear Completed</button>
    </div>
  );
};

export default List;
