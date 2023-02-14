import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';


const ViewUser = () => {
    const { id } = useParams();
    const [user, setUser] = useState({});
    useEffect(() => {
        view();
        console.log("vie")
    }, [])

    const view = async () => {
        const result = await axios.get(`http://localhost:3003/users/${id}`)
        setUser(result.data)
        console.log(result)
    }

    return (
        <div className='container table-responsive-md mt-5'>
            <table className="table align-middle text-center caption-top">
                <caption>User Information</caption>
                <thead className='table-dark'>
                    <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Name</th>
                        <th scope="col">UserName</th>
                        <th scope="col">Email</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.username}</td>
                        <td>{user.email}</td>
                    </tr>

                </tbody>
            </table>
        </div>
    )
}

export default ViewUser