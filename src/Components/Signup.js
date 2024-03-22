// import React, { useEffect } from 'react';
import {  useDispatch } from 'react-redux';
import { userSignup } from '../redux/slices/UserSlice';
import '../App.css';
import * as yup from 'yup';
import { Button, message } from 'antd';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useNavigate,Link } from 'react-router-dom';


const SignupPage = () => {

  // const [items, setItems] = useState([]);
  // const [err, setErr] = useState({err:false, errorMessage:'', field:''})
  // const [err, setErr] = useState("")
  // const [formData, setFormData] = useState({
  //   firstName: '',
  //   lastName: '',
  //   email: '',
  //   password: '',
  // });

  const signupSchema = yup.object().shape({
    firstName: yup.string().required('First name is required').matches(/^[a-zA-Z]+$/, 'First name must contain only letters'),
    lastName: yup.string().required('Last name is required'),
    email: yup.string().email('Invalid email').required('Email is required'),
    password: yup.string().required('Enter a password')
        // .min(8, 'Password must be at least 8 characters')
        // .max(32, 'Password must be at most 32 characters')
        // .matches(/^(?=.*?[#?!@$%^&*-])/, 'Password must contain at least one special character'),
});


  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData({
  //     ...formData,
  //     [name]: value,
  //   });
  // };

  


  
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleSubmit = async(values) => {
    
    try {
      await signupSchema.validate(values, { abortEarly: false });
      message.success('Signup successful');

        // localStorage.setItem('items', JSON.stringify(values));

      dispatch(userSignup(values));
      navigate('/login', { replace: true });
    } catch (error) {
      let errorMessages = error.inner.map((err) => err.message).join('\n');
      message.error(errorMessages.trim());
    }

     
    // dispatch(userSignup(formData))
    // navigate('/login', { replace: true });
    // console.log(formData);

  };
  // const clearPersistedData = () => {
  //   localStorage.clear();
  //   alert("Deleted Success")
  // };

  return (
    <div className="signup-container">
      <h2>Sign Up</h2>
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
          password: '',
        }}
        validationSchema={signupSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form className="signup-form">
            <div className='signupFrom'>
            <Field type="text" name="firstName" placeholder="First Name" />
            <ErrorMessage name="firstName" component="div" className="error" />
            </div>

            <div className='signupFrom'>
            <Field type="text" name="lastName" placeholder="Last Name" />
            <ErrorMessage name="lastName" component="div" className="error" />
            </div>
            <div className='signupFrom'>
            <Field type="email" name="email" placeholder="Email" />
            <ErrorMessage name="email" component="div" className="error" />
            </div>
            
            <div className='signupFrom'>
            <Field type="password" name="password" placeholder="Password" />
            <ErrorMessage name="password" component="div" className="error" />
            </div>

            <button type="submit" disabled={isSubmitting}>
              Sign Up
            </button>
          </Form>
        )}
      </Formik>
      <br/>
      <div className='btnss'>

        <p>Already have an account ? 
        <Link to="/login">Login</Link>
          </p>
        {/* <Button onClick={clearPersistedData}>Clear Casha</Button> */}
        </div>
    </div>
  );
};

export default SignupPage;
