import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Testimonials from './Pages/Testimonials/Testimonials.js';
import Register from './Pages/Register/Register.js';
import { Provider } from 'react-redux';
import store from './Utils/Utils.js';
import Login from './Pages/Login/Login.js';
import ContactUs from './Pages/ContactUs/ContactUs.js';
import TourPage from './Pages/TourPage/TourPage.js';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Provider store={store}> 
    <Router>
      <Routes>
         <Route path='/' element={<App/>}/>
         <Route path='/testimonials' element={<Testimonials/>}/>
         <Route path='/register' element={<Register/>}/>
         <Route path='/login' element={<Login/>}/>
         <Route path='/contactus' element={<ContactUs/>}/>
         <Route path='/tour/:id' element={<TourPage/>}/>

      </Routes>
    </Router>
    </Provider>
  </React.StrictMode>
);
