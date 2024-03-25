import axios from 'axios';
// const url="http://localhost:2100";
const url="https://backendnodejs-j755.onrender.com";

const loginEndPoint="login";
const registerEndPoint="register";
const logoutEndPoint="logout";
const enquiryEndPoint="enquiry";

async function login(formData)
{
  try
  {
      const response=await axios.post(`${url}/${loginEndPoint}`,formData,{headers:{"Content-Type":"application/json"},withCredentials:true});
      if(response.data)
      {
          return response.data;
      }
  }
  catch(err)
  {
      throw err;
  }
}

async function register(formData)
{
    try
    {
        const response=await axios.post(`${url}/${registerEndPoint}`,formData,{headers:{"Content-Type":"application/json"},withCredentials:true});
        if(response.data)
        {
            return response.data;
        }
     
    }
    catch(err)
    {
        throw err;
    }
}

async function Logout()
{
  try
  {
      const response=await axios.get(`${url}/${logoutEndPoint}`,{headers:{"Content-Type":"application/json"},withCredentials:true});
      if(response.data)
      {
          return response.data;
      }
  }
  catch(err)
  {
      throw err;
  }
}

async function enquiryForm(formData)
{
  try
  {
      const response=await axios.post(`${url}/${enquiryEndPoint}`,formData,{headers:{"Content-Type":"application/json"},withCredentials:true});
      if(response.data)
      {
          return response.data;
      }
  }
  catch(err)
  {
      throw err;
  }
}

const initialState={
   registerData:"",
   error:""
}
function Reducer(state=initialState,action)
{
  switch(action.type)
  {
    case 'REGISTER_SUCCESS': return {...state,registerData:action.payload,error:null};
    case 'REGISTER_FAILURE': return {...state,error:action.payload};
      default:
        return state;
  }
}

export {login,Logout,register,Reducer,enquiryForm};