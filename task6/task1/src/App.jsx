
import './App.css';
import { BrowserRouter , Routes, Route,NavLink,  } from 'react-router-dom';
import TaskOfCounter from './Component/TaskOfCounter';
import TaskOfFunny from './Component/TaskOfFunny';
import TaskOfSum from './Component/TaskOfSum';





function App() {

   const stylenav = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  background: '#333',
  padding: '10px',
 
};
  return (
<>
<div>
 <BrowserRouter>
 <div>
  <div style={stylenav}>
  <NavLink to="/sum" activeClassName="active" style={{ color: "white" }}>sum</NavLink>
     <NavLink to="/count" activeClassName="active" style={{ color: "white" }}>counter</NavLink>
     <NavLink to="/text" activeClassName="active" style={{ color: "white" }}>filter</NavLink>

  </div>
   

 </div>
 <Routes>
  <Route exact path="/sum" element={<TaskOfSum />} />
  <Route exact path="/count" element={<TaskOfCounter />} />
  <Route exact path="/text" element={<TaskOfFunny />} />
  

 </Routes>
 </BrowserRouter>
</div>
</>
  );
}

export default App;
