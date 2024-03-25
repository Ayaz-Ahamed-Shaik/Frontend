import { useState } from 'react';
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';
import './ContactUs.css';
import { enquiryForm } from '../../API/Api';


function ContactUs()
{
    const [name,setName]=useState("");
    const [mobile,setMobile]=useState("");
    const [email,setEmail]=useState("");
    const [message,setMessage]=useState("");

    const contactEnquiryForm=()=>{
          if(!name || name==="")
          {
            alert("Name can't be empty");
            return;
          }
          if(!mobile || mobile==="")
          {
            alert("Mobile can't be empty");
            return;
          }
          if(!email || email==="")
          {
            alert("Email can't be empty");
            return;
          }
          if(!message || message==="")
          {
            alert("Message can't be empty");
            return;
          }

          if(localStorage.getItem("login")==="false")
          {
            alert("Please Login First!");
            return;
          }
          const enquiry={
            name:name,
            email:email,
            mobile:mobile,
            message:message
          }

          enquiryForm(enquiry)
          .then(res=>{
            if(res.enquiry)
            {
                alert("Enquiry Form saved!");
            }
          })
          .catch(err=>{
            alert(`Error occured: ${err}`);
          })
    }

    return (
    <div className="ContactUsContainer">
        <Header/>
        <div className='ContactusForm'>
            <h3>Want Us To Call Back ? Please Fill the Details Below :</h3>
            <div className='inputbox'>
                <label>Name *</label>
                <input type='text' placeholder='Enter Name' onChange={(e)=>setName(e.target.value)}/>
            </div>
            <div className='inputbox'>
                <label>Mobile *</label>
                <input type='text' placeholder='Enter Mobile' onChange={(e)=>setMobile(e.target.value)}/>
            </div>
            <div className='inputbox'>
                <label>Email *</label>
                <input type='text' placeholder='Enter Email' onChange={(e)=>setEmail(e.target.value)}/>
            </div>
            <div className='inputbox'>
                <label>Message *</label>
                <input type='text' placeholder='Enter Message' onChange={(e)=>setMessage(e.target.value)}/>
            </div>
            <div className='inputbox'>
                <button onClick={()=>{
                    contactEnquiryForm()
                }}>Submit</button>
            </div>
        </div>
        <Footer/>
    </div>)
}

export default ContactUs;