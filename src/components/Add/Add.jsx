import React, { useState } from 'react';

const Add = () => {
    const [name, setname] = useState('')
    const [gmail, setgmail] = useState('')

    const reset=()=>{
        setname('')
        setgmail('')
    }
    const handlesubmit = (e) => {
        e.preventDefault()
        const data = { name, gmail }
        console.log(data)
        fetch("http://localhost:5050/user", {
            method: "POST", // or 'PUT'
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(user=>{
            console.log(user)
        })
        reset()

    }
    return (
        <div className='container mx-auto justify-center text-center'>
            <h1>Add user</h1>
            <form onSubmit={handlesubmit} className='space-y-2'>
                <h1>Name:<input value={name} onChange={(e) => setname(e.target.value)} className='border' type="text" /></h1>
                <h1>Gmail:<input value={gmail} onChange={(e) => setgmail(e.target.value)} className='border' type="text" /></h1>
                <button className='bg-[red] py-2 text-white px-11'>Add</button>
            </form>
        </div>
    );
};

export default Add;