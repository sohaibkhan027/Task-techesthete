// import React, { useEffect, useState } from 'react';
import { Button, message } from 'antd';
import { useDispatch } from 'react-redux';
import { userLogout } from '../redux/slices/UserSlice'; // Import the userLogout action
import { deleteUser } from '../redux/slices/UserSlice'; // Import the userLogout action
import { useNavigate } from 'react-router-dom';
// import images from '../images/home.jpg';
import { useSelector } from 'react-redux';
// import Edit from './Edit';




const Home = () => {
  const [messageApi, contextHolder] = message.useMessage();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const users = useSelector((state) => state.user.userAccounts);
  const LoggedUser = useSelector((state) => state.user.loggedUser);

  // const { isAuthenticated } = useSelector((state) => state.user);


  // useEffect(()=>{
  //   if(!isAuthenticated){
  //     console.log();
  //     navigate("/login")
  //   }

  console.log(LoggedUser.firstName);
  const success = () => {
    messageApi.open({
      type: 'success',
      content: 'Logout',
    });
    setTimeout(() => {
      dispatch(userLogout()); // Dispatch userLogout action when logout button is clicked
      navigate("/login")
    }, "1000");

  }

  // const edit = () => {
  //   navigate("/edit")
  // }

  const del = (userId) => {
    dispatch(deleteUser(userId));
    dispatch(userLogout());
    messageApi.open({
      type: 'success',
      content: 'Account Deleted',
    })
    navigate("/")
  }

  return (
    <>
      <div className='App' >
        {/* <img src={images} className='images'/> */}
        <p>User Login Name <strong> {LoggedUser.firstName} {LoggedUser.lastName} </strong></p>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Lastname</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <tr key={user.email}>
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
                <td>
                  {LoggedUser && LoggedUser.email === user.email && (
                    <Button onClick={() => {
                      navigate("/edit")
                      // edit(user.email)
                    }}>Edit</Button>
                  )}
                </td>
                <td>
                  {LoggedUser && LoggedUser.email === user.email && (
                    <Button onClick={() => {
                      del(user.email)
                    }}>Delete</Button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {contextHolder}
        <Button onClick={success}>Logout</Button>
      </div>
    </>
  );
}


export default Home