import React from 'react';
import { Button, message } from 'antd';
import { useDispatch } from 'react-redux';
import { userLogout } from '../redux/slices/UserSlice'; // Import the userLogout action
import { useNavigate } from 'react-router-dom';



const Home=()=>{
    const [ contextHolder] = message.useMessage();
    const dispatch = useDispatch();
    const navigate = useNavigate();

      return (
        <>
        {contextHolder}
<Button onClick={() => {
          message.success("Logout");
          dispatch(userLogout())
          navigate("/login");
        }}>Success</Button> 
        
        </>
           );
    }


export default Home