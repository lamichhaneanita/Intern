import React, { useState, useEffect } from 'react'

const Login = (props) => {
  const initalValues = {
    email: '',
    password: ''
  };
  const [formValues, setFormValues] = useState(initalValues)
  const [formError, setFormError] = useState({})
  const [submit, setSubmit] = useState(false)


  function handleSubmit(e) {
    e.preventDefault();
    setFormError(validate(formValues));
    setSubmit(true)

  }

  function handleChange(e) {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value })
  };

  useEffect(() => {
    console.log(formError);
    if (Object.keys(formError).length === 0 && submit) {
      console.log(formValues);
    }
  }, [formError]);
  const validate = (values) => {
    const errors = {};
    if (!values.email) {
      errors.email = "Email is Required";
    }
    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length > 10) {
      errors.password = "Password cannot exceed more than 10 character";
    }
    return errors;

  };

  return (
    <>
      {useEffect(() => {
        if (Object.keys(formError).length === 0 && submit) {
          alert("Login successful!!!!!")
        }
      })}
      <div className='main'>

        <form onSubmit={handleSubmit}>
          <div className='content'>
            <div className='title'>
              <h1>Chatapp</h1><br />
              <p>Login to your account</p>
            </div><br />
            <div className='input'>
              Email: <input type='email' name="email" className='email' placeholder='Email' onChange={handleChange} values={formValues.email} /><br /><span>{formError.email}</span><br />
              Password: <input type='password' name="password" className="password" placeholder='password' onChange={handleChange} values={formValues.password} /><br /><span>{formError.password}</span>

            </div>
            <div className='input1'>
              <input type='checkbox' className='check' /> Remember me<a href='#'>Forget password?</a>
            </div>
            <div className='btn'>
              <button className='login' >Login</button>
            </div>
            <div className='btn1'>
              <p>Don't have an account?<button type='submit' className='submit' onClick={() => props.onFormSwitch('register')}>Sign Up</button></p>
            </div>
          </div>
        </form>
      </div>
    </>
  )
}
export default Login