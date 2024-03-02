import Header from '../../Components/Header/Header';
import './Register.css';
import Footer
 from '../../Components/Footer/Footer';
function Register()
{
    return (
        <div className='HomeContainer'>
          <Header/>
        <div className='registerContainer'>
            <h2>Register Here</h2>
            <div className='registerForm'>
               <div className='option'>
                <label>Name:</label>
                  <input type='text'/>
               </div>
               <div className='option'>
               <label>Email:</label>
                  <input type='email'/>
               </div>
            <div className='option'>
               <label>Password:</label>
                  <input type='password'/>
               </div>
               <div className='option'>
               <label>Confirm Password:</label>
                  <input type='text'/>
               </div>
        </div>
        </div>
          <Footer/>
        </div>
    );
}

export default Register;