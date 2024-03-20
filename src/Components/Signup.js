import React, { useState } from 'react';
import {  useDispatch } from 'react-redux';
import { userSignup } from '../redux/slices/UserSlice';
import '../App.css';
import * as yup from 'yup';
import { message } from 'antd';



import { useNavigate } from 'react-router-dom';



const SignupPage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });

  const signupSchema = yup.object().shape({
    firstName: yup.string().required('First name is required').matches(/^[a-zA-Z]+$/, 'First name must contain only letters'),
    lastName: yup.string().required('Last name is required'),
    email: yup.string().email('Invalid email').required('Email is required'),
    password: yup.string()
        .min(8, 'Password must be at least 8 characters')
        .max(32, 'Password must be at most 32 characters')
        .matches(/^(?=.*?[#?!@$%^&*-])/, 'Password must contain at least one special character'),
});


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const clearPersistedData = () => {
    localStorage.clear();
    alert("Deleted Success")
  };
  

 

  const navigate = useNavigate();



  const dispatch = useDispatch();

  const handleSubmit = async(e) => {
    e.preventDefault();

    try {
      // Validate form data against schema
      await signupSchema.validate(formData, { abortEarly: false });

      message.success('Signup successful');
      dispatch(userSignup(formData));
      navigate('/login', { replace: true }); 

  } catch (error) {
    // Handle validation errors
    let errorMessages = '';
    error.inner.forEach(err => {
        errorMessages += `${err.message}\n`;
    });
    message.error(errorMessages.trim()); // Display concatenated error messages
}
    // dispatch(userSignup(formData))
    // navigate('/login', { replace: true });

    

    console.log(formData);
  };

  return (
    <div className="signup-container">
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit} className="signup-form">
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          value={formData.firstName}
          onChange={handleChange}
          
        />
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={formData.lastName}
          onChange={handleChange}
          
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          
        />
        <button type="submit">Sign Up</button>

      </form>
      <br/>
        <button onClick={clearPersistedData}>Clear Local Storage</button>
    </div>
  );
};

export default SignupPage;
