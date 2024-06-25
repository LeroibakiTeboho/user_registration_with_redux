import React from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

function Home() {
  const users = useSelector((state) => state.users);


  return (
    <div className="container">

      {/* || title */}
      <h2 className="mt-5">Redux Project</h2>

      {/* create user button */}
      <Link to="/create" className="btn btn-success my-3">
        Create +
      </Link>

      {/* || table */}
      <table className="table">

        {/* || table header */}
        <thead className="table">
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        
        {/* || table body */}
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>
                <button className="btn btn-sm btn-primary">Edit</button>
                <button className="btn btn-sm btn-danger ms-2">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Home;
