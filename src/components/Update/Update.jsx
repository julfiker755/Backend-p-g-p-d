import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const Update = () => {
    const {id}=useParams()
    const [user,setuser]=useState([])
    const [name, setname] = useState('')
    const [gmail, setgmail] = useState('')
    const navigate=useNavigate()

    // fetch data
    useEffect(()=>{
        const url=`http://localhost:5050/user/${id}`
        fetch(url)
        .then(res=>res.json())
        .then(data=>setuser(data))
    },[name,gmail])
    
    const handlesubmit = async(e) => {
        e.preventDefault()
        const data = { name, gmail }
        // send to data server
        const url=`http://localhost:5050/user/${id}`
        fetch(url, {
            method: 'PUT', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log('Success:', data);
                navigate("/user")
            })  
                   
    }
    return (
        <div className='container mx-auto justify-center text-center'>
            <h1>Update user name::{user.name}</h1>
            <form onSubmit={handlesubmit} className='space-y-2'>
                <h1>Name:<input defaultValue={user.name} onChange={(e) => setname(e.target.value)} className='border' type="text" /></h1>
                <h1>Gmail:<input defaultValue={user.gmail}  onChange={(e) => setgmail(e.target.value)} className='border' type="text" /></h1>
                <button className='bg-[red] py-2 text-white px-11'>Add</button>
            </form>
        </div>
    );
};

export default Update;