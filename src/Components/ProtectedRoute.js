// ProtectedRoute.js
import React, { useEffect } from 'react';
import {  useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Protected = ( props ) => {
    const {Component} = props;
    const navigate = useNavigate();
    const loguser = useSelector(state => state.user); // Assuming your user data is stored in the Redux store
    console.log(loguser.isAuthenticated);
    useEffect(() => {
        console.log('User:', loguser); // Log the user
        if (!loguser.isAuthenticated) {
          console.log('User not authenticated, redirecting to login');
          navigate("/login");
        }
      }, [loguser, navigate]);
    
      return loguser ? <Component /> : null;
    };

export default Protected;