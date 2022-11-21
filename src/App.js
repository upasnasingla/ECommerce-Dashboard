import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
 //import Sidebar from './components/Sidebar';
 import Home from './components/Home';
import Ecommerce from './pages/Ecommerce';
import Employees from './pages/Employees';
import Lines from './pages/Lines';
import Navbar from './components/Navbar';
import LoginForm from './pages/LoginForm';
import Comment from './pages/Comment';
import Cart from './pages/Cart';
import Notification from './pages/Notification';




const App = () => {
  return (
    <BrowserRouter>
    <Navbar/>
      
        <Routes>
          <Route  path="/"  element={<Home />} />
          
          <Route  path="/ecommerce" element={<Ecommerce />} />
         
          <Route  path="/employee" element={ <Employees />} />
          
          <Route  path="/lines" element={<Lines />} />
          <Route path="/login" element={<LoginForm/>}/>
          <Route path="/comment" element={<Comment/>}/>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/notification" element={<Notification/>}/>
          </Routes>
     
      
      
    </BrowserRouter>
    
  );
};

export default App;