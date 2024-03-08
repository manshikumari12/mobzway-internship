
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
import { Eventcom } from './Component/Eventcom';
import { Eventcomps } from './Component/Eventcomps';
import { Lifecycle } from './Component/Lifecycle';
import { Controllcomp } from './Component/Controllcomp';
import { Uncontroll } from './Component/Uncontroll';
import Contex from './Component/Contex';


function App() {

  return (
 <>
<Contex/>
 <Controllcomp/>
 <Uncontroll/>
<Lifecycle/>
 <Eventcomps/>
 <Eventcom/>

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
