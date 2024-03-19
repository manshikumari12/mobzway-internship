import React, { useEffect } from 'react';
import $ from 'jquery';

const Mycomp = () => {
  useEffect(() => {
   
    $('#myButton').click(() => {
      alert('Button clicked!');
    });
    
   
    return () => {
      $('#myButton').off('click');
    };
  }, []); 

  return (
    <div>
      <button id="myButton">Click me</button>
    </div>
  );
};

export default Mycomp;
