import React, { useEffect, useState } from 'react'
import axios from "axios";
import { Link } from 'react-router-dom';

const Home = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    loadUser();
  }, [])
  const loadUser = async () => {
    const result = await axios.get("http://localhost:3003/users")
    setData(result.data)
    console.log(result.data.reverse());
  }

  const deleteItem = async (userId) => {
    await axios.delete(`http://localhost:3003/users/${userId}`);
    loadUser();
  }

  return (
    <>
      <div className='container table-responsive mt-5'>
        <table className="table align-middle text-center caption-top">
          <caption>List of users</caption>

          <thead className='table-dark'>
            <tr className='text-white'>
              <th scope="col">id</th>
              <th scope="col">Name</th>
              <th scope="col">UserName</th>
              <th scope="col">Email</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          {
            data.map((value, index) => {
              return (
                <tbody key={index}>
                  <tr>
                    <td>{value.id}</td>
                    <td>{value.name}</td>
                    <td>{value.username}</td>
                    <td>{value.email}</td>
                    <td>
                      <Link className='btn btn-sm btn-primary me-1' to={`viewuser/${value.id}`}>View</Link>
                      <Link className='btn btn-warning btn-sm me-1' to={`/edituser/${value.id}`}>Edit</Link>
                      <Link className='btn btn-sm btn-danger' onClick={() => deleteItem(value.id)}>Delete</Link></td>
                  </tr>
                </tbody>
              )
            })
          }

        </table>
      </div>
    </>
  )
}

export default Home