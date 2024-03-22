// import { useState  } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { userLogin } from '../redux/slices/UserSlice';
import { useNavigate, Link } from 'react-router-dom';
import {  message } from 'antd';
import * as yup from 'yup';
import { Formik, Form, Field, ErrorMessage } from 'formik';




const Login = () => {
   
    // const [formData, setFormData] = useState({
    //     email: '',
    //     password: '',
    //   });
      const loginSchema = yup.object().shape({
        email: yup.string().email('Invalid email').required('Email is required'),
        password: yup.string().required('Password is required')
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
      const users= useSelector(state => state.user.userAccounts);
      console.log("user:",users);
 
      const dispatch = useDispatch();
      const navigate = useNavigate();
      // const [messageApi, contextHolder] = message.useMessage();

    
      const handleSubmit = async (values, { setSubmitting }) => {


        try {
          await loginSchema.validate(values);
          
          // const data =JSON.parse(localStorage.getItem("items"));
          // console.log("data",data);

          const matchedUser = users.find(user => user.email === values.email && user.password === values.password);
          // const matchedUser = users.find(user => data.email === values.email && data.password === values.password);
    
          // let userInfo = JSON.parse(localStorage.getItem(values));
          // console.log("userinfo",userInfo);
          if (matchedUser) {

            // Dispatch login action
            dispatch(userLogin(matchedUser)); 
            message.success('Login successful');
            navigate('/home');

          } else {
            // If user is not found or credentials are invalid
            message.error('Invalid email or password');
          }
        } catch (error) {
          let errorMessages = error.inner.map((err) => err.message).join('\n');
          message.error(errorMessages.trim());
        } finally {
          setSubmitting(false);
        }
      };
    
        // dispatch(userLogin(formData))
        // navigate('/home', { replace: true });
        // console.log(formData);
      
    
      return (
        <div className="signup-container">
          {/* {contextHolder} */}
          <h2>Login</h2>

          <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
          password: '',
        }}
        validationSchema={loginSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form className="signup-form">
            <div className='loginForm'>
            <Field type="email" name="email" placeholder="Email" />
            <ErrorMessage name="email" component="p" className="error" />
            </div>

            <div className='loginForm'>
            <Field type="password" name="password" placeholder="Password" />
            <ErrorMessage name="password" component="p" className="error" />
            </div>
            
            <button type="submit" disabled={isSubmitting}>
              Login
            </button>
          </Form>
        )}
      </Formik>
      <br/>
      <p>Dont have an account ?  
        <Link to="/">Signup</Link>
          </p>

          {/* {user} */}
        </div>
  )
}

export default Login