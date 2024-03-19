// import React, { useState } from 'react';

// const ControlledComponent = () => {
//   const [value, setValue] = useState('');

//   const handleChange = (e) => {
//     setValue(e.target.value);
//   };

//   return (
//     <input type="text" value={value} onChange={handleChange} />
//   );
// };

// export default ControlledComponent;


// import React, { useRef } from 'react';

// const UncontrolledComponent = () => {
//   const inputRef = useRef();

//   const handleSubmit = (e) => {
//     e.preventDefault();=
//     console.log(inputRef.current.value);
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input type="text" ref={inputRef} />
//       <button type="submit">Submit</button>
//     </form>
//   );
// };

// export default UncontrolledComponent;

