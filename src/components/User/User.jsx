import React, { useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const User = () => {
    const data=useLoaderData()
    const [user,setuser]=useState(data)
    console.log(user)
    const navigate=useNavigate()
    const handledelete=userr=>{
       const sure=confirm(`You are sure delete ${userr.name}`)
    //    http://localhost:5050/user
       if(sure){
        fetch(`http://localhost:5050/user/${userr._id}`, {
            method: "DELETE", // or 'PUT'
        })
        .then(res => res.json())
        .then(data=>{
            if(data.deletedCount > 0){
            const newdata=user.filter(u=>u._id !== userr._id)
            setuser(newdata)
            }
        })
       }
    }
    return (
        <div className='text-center'>
            <h1 className='text-[red] text-2xl'>User length {data.length}</h1>
             {user.map(user=><li key={user._id}>{user.name} || {user.gmail} || 
             <button onClick={()=>handledelete(user)} className='bg-[green] font-bold text-white py-1 px-4 my-3'>X</button>
             <button onClick={()=>navigate(`/update/${user._id}`)} className='bg-[#27a6dd] font-bold text-white py-1 px-4 my-3'>Update</button>
             </li>)}
        </div>
    );
};

export default User;