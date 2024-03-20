import { useState  } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { userLogin } from '../redux/slices/UserSlice';
import { useNavigate } from 'react-router-dom';
import {  message } from 'antd';
import * as yup from 'yup';



const Login = () => {
   
    const [formData, setFormData] = useState({
        email: '',
        password: '',
      });
      const loginSchema = yup.object().shape({
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
      const users= useSelector(state => state.user.userAccounts);
      console.log("user:",users);
 
      const dispatch = useDispatch();
      const navigate = useNavigate();
      const [messageApi, contextHolder] = message.useMessage();

    
      const handleSubmit = async(e) => {
        e.preventDefault();

        try {
          // Validate form data against schema
          await loginSchema.validate(formData, { abortEarly: false });
        const user = users.find(user => user.email === formData.email && user.password === formData.password);
        if (user) {
          dispatch(userLogin(user));
          // Dispatch login action with user data
          messageApi.success("Login successfully");
          navigate('/home', { replace: true });
        } 
// hdbvjhzvbsdjhvbujdsh njkn
// jbjhbjb
// shhsbhbchsbhdbs
// ncjsdncus

      }catch (error) {
          // Handle validation errors
          error.inner.forEach(validationError => {
              message.error(validationError.message);
          });
      }
        
      
        // dispatch(userLogin(formData))
        // navigate('/home', { replace: true });



    
        console.log(formData);
      };
    
      return (
        <div className="signup-container">
          {contextHolder}
          <h2>Login</h2>

          <form onSubmit={handleSubmit}  className="signup-form">
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
            />
            <button  type="submit">Login</button>
    
          </form>
          {/* {user} */}
        </div>
  )
}

export default Login