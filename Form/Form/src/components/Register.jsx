import React, { useState , useEffect} from 'react'

const Register = (props) => {
   const initialValues ={
  firstName:'',
  lastName:'',
  email:'',
  password:'',
  cpassword:''
  }
  const [formValues,setFormValues]=useState(initialValues)
  const [formErrors,setFormErrors]=useState({})
  const [submit,setSubmit]=useState(false)
  // const [data,setData]=useState([])
  const handleChange = (e) =>{
    const {name , value}=e.target;
    setFormValues({...formValues, [name]:value})
    // console.log(formValues);
  }

  const handleSubmit = (e) =>{
    e.preventDefault();
    setFormErrors(validate(formValues))
    setSubmit(true)

  const registerdata={
    firstName:formValues.firstName,
    lastName:formValues.lastName,
    email:formValues.email,
    password:formValues.password,
    Confirmpassword:formValues.cpassword
  };
  fetch (" https://rest-api-bjno.onrender.com/register", { 
    method:'POST',
    headers:{
      'Content-Type':"application/json"
    },
    body:JSON.stringify(registerdata),
  })
  .then(res=>res.json())
  .then(data =>{ 
    console.log(data)

  })
  .catch(error=>{
console.log('Error',error)
  })


 
  }



  useEffect(()=>{
    console.log(formErrors);
    if(Object.keys(formErrors).length === 0 && submit){
      console.log(formValues);
    }
  },[formErrors])

  
  const validate= (values) =>{ 
    const errors = {};
    if (!values.firstName){
      errors.firstName="First Name is required!";
    }
    if (!values.lastName){
      errors.lastName="Last Name is required!";
    }
    if (!values.email){
      errors.email="Email is required!";
    }
    if (!values.password){
      errors.password="Password is required!";
    }
    else if(!values.password.length >10){
      errors.password="Password must be less than 10 character"
    }
    if (!values.cpassword){
      errors.cpassword="Confirm password is required!";
    }else if (values.cpassword === '' || values.cpassword !== values.password){
     errors.cpassword="password doesnt match";
    }
    return errors
    
  }
  return (
    <>
    {useEffect(()=>{
      if(Object.keys(formErrors).length === 0 && submit ){ 
      alert("Login from successfully!!!!!")
      }
     },[formErrors])}
    <div>
    <div className='Signupmain'>
 
  <form onSubmit={handleSubmit}>
  <div className='container'>
  <div className='title1'>
   <h1>Chatapp Registration</h1>
     <p>Register  your account</p>
  </div> 
 <div className='input-form'>
    FirstName: <input type='text'  name='firstName' onChange={handleChange} values={formValues.firstName} placeholder='firstname' className='firstname'/><br/><br/>
    LastName: <input type='text' name='lastName' onChange={handleChange}  values={formValues.lastName} placeholder='lastname' className='lastname'/><br/><br/>
    Email: <input type='email' name= 'email' onChange={handleChange} values={formValues.email}   placeholder='Email' className='email'/><br/><br/>
    Password: <input type='password' name='password' onChange={handleChange} values={formValues.password}  placeholder='Password'  className='password'/><br/><br/>
   ConfirmPassword: <input type='password' name='cpassword' onChange={handleChange} values={formValues.cpassword}  placeholder='Confirm Password' className='cpassword' />

  </div>
  
  <div className='btn1'>
    <button className='button' type='submit' >Register</button><br/>
   Already have an account?<button type='submit'className='sign' onClick={()=> props.onFormSwitch('login')}>Login </button>
   
  </div>
</div>
</form>
</div>
    

 
</div>
</>
  )
}
export default Register