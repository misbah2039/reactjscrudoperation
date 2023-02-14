import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from "react-router-dom"
import axios from 'axios';

const EditUser = () => {
    let history = useNavigate();
    const [user, setUser] = useState({
        id: "",
        name: "",
        username: "",
        email: ""
    });

    const { id } = useParams();

    useEffect(() => {
        userEdit();
    },[])

    const userEdit = async () => {
        const result = await axios.get(`http://localhost:3003/users/${id}`)
        setUser(result.data)

    }

    const onInputChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }

    const onsubmit = async (e) => {
        e.preventDefault();
        alert("Are You Sure")
        await axios.put(`http://localhost:3003/users/${id}`, user)
        history("/")
    }


    return (
        <>
            <div className="container mt-5">
                <form >
                    <div className="row mt-5">
                        <div className="col-md-6">
                            <label htmlFor="id" className="form-label">Id</label>
                            <input type="text" className="form-control" id="id" placeholder="Enter Id" name="id" value={user.id} onChange={(e) => onInputChange(e)} required />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="name" className="form-label">Name</label>
                            <input type="text" className="form-control" id="id" placeholder="Enter Name" name="name" value={user.name} onChange={(e) => onInputChange(e)} required />
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="col-md-6">
                            <label htmlFor="username" className="form-label">UserName</label>
                            <input type="text" className="form-control" id="username" placeholder="Enter UserName" name="username" value={user.username} onChange={(e) => onInputChange(e)} required />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input type="email" className="form-control" id="email" placeholder="Enter Email" name="email" value={user.email} onChange={(e) => onInputChange(e)} required />
                        </div>
                    </div>
                    <div className="row mt-3">
                        <button type='button' className='btn btn-warning' onClick={(e) => onsubmit(e)}>Add User</button>
                    </div>
                </form>
            </div>

        </>
    )
}

export default EditUser