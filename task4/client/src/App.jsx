
import './App.css';
import React from 'react';
// import React, { useState } from 'react';
import { Nav } from './Component/Nav';
import Classbased from './Component/Classbased';
import { Functionbased } from './Component/Functionalbased';
import { Counter } from './Component/Counter';
import { Props } from './Component/Props';
import { Parentcomp } from './Component/Parentcomp';
import { ChildComponent } from './Component/Childcomponent';
import { Mylistcomp } from './Component/Mylistcomp';

function App() {

  return (
 <>
 <Mylistcomp/>
 <Props name="Manshi" age={80} city="Jharkhand"/>
 <ChildComponent/>
 <Parentcomp/>

 <Counter/>
 <Nav/>
<Classbased/>
<Functionbased/>
 </>
  );
}
export default App;
