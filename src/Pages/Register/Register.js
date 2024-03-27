import Header from '../../Components/Header/Header';
import './Register.css';
import Footer
 from '../../Components/Footer/Footer';
import { useEffect, useState } from 'react';
import { register } from '../../API/Api';
import { useDispatch, useSelector } from 'react-redux';

function Register()
{
   const dispatch=useDispatch();
  
   const [name,setName]=useState('');
   const [email,setEmail]=useState('');
   const [password,setPassword]=useState('');
   const [cPassword,setCpassword]=useState('');
   const [error,setError]=useState('');

   const registerD=useSelector(state=>state);

   const registerData=()=>{
          if(!name && name=="")
          {
            alert("Name not defined");
            return;
          }
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
          if(password!==cPassword)
          {
            alert("Password not matched");
            return;
          }
        const form={
         name:name,
         email:email,
         password:password,
        }

          register(form)
          .then(res=>{
            dispatch({type:"REGISTER_SUCCESS",payload:res});
            console.log("register",res);
          })
          .catch(err=>{
            dispatch({type:"REGISTER_FAILURE",payload:err});
            throw err;
          });   }


    return (
        <div className='HomeContainer'>
          <Header/>
        <div className='registerContainer'>
            <h2>Register Here</h2>
            <div className='registerForm'>
               <div className='option'>
                <label>Name:</label>
                  <input type='text' onChange={(e)=>setName(e.target.value)}/>
               </div>
               <div className='option'>
               <label>Email:</label>
                  <input type='email' onChange={(e)=>setEmail(e.target.value)}/>
               </div>
            <div className='option'>
               <label>Password:</label>
                  <input type='password' onChange={(e)=>setPassword(e.target.value)}/>
               </div>
            <div className='option'>
            <label>Confirm Password:</label>
               <input type='text' onChange={(e)=>setCpassword(e.target.value)}/>
            </div>
              <button onClick={()=>{registerData()}}>Sign Up</button>
              <button onClick={()=>{window.location.href="/login"}}>Login</button>

        </div>
        </div>
          <Footer/>
        </div>
    );
}

export default Register;