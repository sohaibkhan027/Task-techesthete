import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { editAndUpdateUser } from '../redux/slices/UserSlice';
import { useNavigate } from 'react-router-dom';


const Edit = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loggedInUser = useSelector(state => state.user.loggedUser);
  console.log("login user",loggedInUser);

  const [formData, setFormData] = useState({
    firstName: loggedInUser.firstName,
    lastName: loggedInUser.lastName,

  });

  const handleChange = (e) => {
    setFormData({ ...formData,
        [e.target.name]: e.target.value
     });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(editAndUpdateUser({ email: loggedInUser.email, updatedData: formData }));
    navigate("/home")
  };
    return (
        <div>
          <h2>Edit Profile</h2>
          <form onSubmit={handleSubmit} className='signup-form'>
            <label>First Name:</label>
            <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} />
            <label>Last Name:</label>
            <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} />
             <button type="submit">Save Changes</button>
          </form>
        </div>
      );
}

export default Edit

