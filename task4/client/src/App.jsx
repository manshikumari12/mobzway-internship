
import './App.css';
import React from 'react';
// import React, { useState } from 'react';
import { Nav } from './Component/Nav';
function App() {

  return (
    <React.Fragment>
      <h1>Fragment Example</h1>
      <p>This is a paragraph inside a fragment.</p>
      <Nav/>
    </React.Fragment>
  );
}
export default App;
