import React from 'react';
import { BrowserRouter , Routes, Route,NavLink,  } from 'react-router-dom';
import Home from './Component/Home';
import Productdetails from './Component/Productdetails';
import Product from './Component/Product';
// import About from './Component/About';
import Notfound from './Component/Notfound';
import RealTimeClock from './Component/RealTimeClock';

import ParentComponent from './Component/ParentComponent';
import { MyComponent } from './Component/MyComponent';
import List from './Component/List';


// import About from './Component/About';
function App() {
 const stylenav = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  background: '#333',
  padding: '10px',
  color: 'white', // Set color to white
};

  return (
    <>

    <BrowserRouter>
    <div>
      <div style={stylenav}>
     <NavLink to="/" activeClassName="active" style={{ color: "white" }}>About</NavLink>

        <NavLink to="/product" activeClassName="active" style={{ color: "white" }}>product</NavLink>
        <NavLink to="/timer"  activeClassName="active" style={{ color: "white" }}>Timer</NavLink>
        <NavLink to="/parent"  activeClassName="active" style={{ color: "white" }}>ParentComponent</NavLink>
        <NavLink to="/counter"  activeClassName="active" style={{ color: "white" }}>Counter</NavLink>
        <NavLink to="/list"  activeClassName="active" style={{ color: "white" }}>List</NavLink>


        
      </div>
    </div>
    <Routes>
  <Route exact path="/home/:id" element={<Home />} />
  <Route exact path="/timer" element={<RealTimeClock/>} />
  <Route exact path="/parent" element={<ParentComponent/>} />
  <Route exact path="/counter" element={<MyComponent/>} />
  <Route exact path="/list" element={<List/>} />




  <Route path='/product' element={<Product/>}>
<Route path="/products/info" element={<Productdetails/>} />
  <Route path="*" element={<Notfound/>} />
  </Route>
    </Routes>
    </BrowserRouter>
    </>
  );
}
export default App;
