import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import { useEffect, useState } from 'react';
import { login, register } from '../../API/Api';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function Login()
{
   const dispatch=useDispatch();
  
   const [email,setEmail]=useState('');
   const [password,setPassword]=useState('');
   const [error,setError]=useState('');
   const navigate=useNavigate();

   const registerData=()=>{
          if(!email && email=="")
          {
            alert("Email not defined");
            return;
          }
          if(!password && password=="")
          {
            alert("Password not defined");
            return;
          }

        const form={
         email:email,
         password:password,
        }

          login(form)
          .then(res=>{
            dispatch({type:"REGISTER_SUCCESS",payload:res});
            if(res.login)
            {
               localStorage.setItem("login","true");
               navigate("/");
            }
            else
            {
              localStorage.setItem("login","false");
            }
          })
          .catch(err=>{
            dispatch({type:"REGISTER_FAILURE",payload:err});
            throw err;
          });}


    return (
        <div className='HomeContainer'>
          <Header/>
        <div className='registerContainer'>
            <h2>Welcome Back</h2>
            <div className='registerForm'>
               <div className='option'>
               <label>Email:</label>
                  <input type='email' onChange={(e)=>setEmail(e.target.value)}/>
               </div>
            <div className='option'>
               <label>Password:</label>
                  <input type='password' onChange={(e)=>setPassword(e.target.value)}/>
               </div>
               <button onClick={()=>{registerData()}}>Login</button>
              <button onClick={()=>{window.location.href="/register"}}>Sign Up</button>
           
        </div>
        </div>
          <Footer/>
        </div>
    );
}

export default Login;