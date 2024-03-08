import React, { useState } from 'react';

const Controllcomp = () => {

  const [inputValue, setInputValue] = useState('');


  const handleChange = (e) => {
    setInputValue(e.target.value);
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Input value: ' + inputValue);
  };

  return (
    <div>
      <h2>Controlled Component Example</h2>
      <form onSubmit={handleSubmit}>

        <input type="text" value={inputValue} onChange={handleChange} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export { Controllcomp };
