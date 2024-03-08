import React, { useRef } from 'react';

const Uncontroll = () => {

  const inputRef = useRef(null);


  const handleSubmit = (e) => {
    e.preventDefault();

    alert('Input value: ' + inputRef.current.value);
  };

  return (
    <div>
      <h2>Uncontrolled Component Example</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" ref={inputRef} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export { Uncontroll };
