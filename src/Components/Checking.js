import React from 'react'
import { useSelector } from 'react-redux';

const Checking = () => {
    const user = useSelector(state => state.user.loggedUser); // Assuming your user data is stored in the Redux store
    console.log(user);
  return (
    <div>Checking</div>
  )
}

export default Checking