import React, { Suspense } from 'react';
import { Routes, Route } from "react-router-dom";
import './App.css';
import Nav from './Component/Nav';


const Homepage = React.lazy(() => import("./Component/Home"));
const Aboutpage = React.lazy(() => import("./Component/About"));
const UsesPage  = React.lazy(() => import("./Component/Usestatecon"));
const UseeffectPage = React.lazy(() => import("./Component/Useeffectcon"));  

function App() {
  return (
    <div>
      <Nav/>
      {/* <Usestatecon/>
      <Useeffectcon/> */}
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<Aboutpage />} />
          <Route path="/state" element={<UsesPage/>}/>
          <Route path='/effect' element={<UseeffectPage/>} />


        </Routes>
      </Suspense>
    </div>
  );
}

export default App;

