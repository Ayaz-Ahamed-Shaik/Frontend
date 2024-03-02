import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Testimonials from './Pages/Testimonials/Testimonials.js';
import Register from './Pages/Register/Register.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
         <Route path='/' element={<App/>}/>
         <Route path='/testimonials' element={<Testimonials/>}/>
         <Route path='/register' element={<Register/>}/>
      </Routes>
    </Router>
  </React.StrictMode>
);
