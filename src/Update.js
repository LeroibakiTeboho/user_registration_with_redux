// || imports
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom'
import { updateUser } from './UserReducer';


function Update() {

    // || hooks
    const {id} = useParams();
    const users = useSelector((state) => state.users);
    const existingUser = users.filter(user => user.id == id);
    const {name,email} = existingUser[0];
    const [_name, setName] = useState(name);
    const [_email, setEmail] = useState(email);
    const dispatch = useDispatch();
    const navigate = useNavigate();


    // || event handler
    const handleUpdate = (event) => {
        event.preventDefault();
        dispatch(updateUser({
            id: id,
            name: _name,
            email: _email
        }))
        navigate('/');
    }


  return (
    <div className="d-flex w-100 vh-100 justify-content-center align-items-center">
      <div className="w-50 border bg-secondary text-white p-5">

        {/* || title */}
        <h3>Edit User</h3>

        {/* || form */}
        <form onSubmit={handleUpdate}>

        {/* || name input */}
          <div>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              name="name"
              className="form-control"
              placeholder="Enter name"
              value={_name}
              onChange={e => setName(e.target.value)}
              required
            />
          </div>
          <br />

        {/* || email input */}
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              name="email"
              className="form-control"
              placeholder="Enter email"
              value={_email}
              onChange={e => setEmail(e.target.value)}
              required
            />
          </div>
          <br />

          {/* submit button */}
          <button className="btn btn-info">Update</button>
        </form>
      </div>
    </div>
  )
}

export default Update