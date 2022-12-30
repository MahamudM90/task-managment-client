import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import toast from "react-hot-toast";
const Update = () => {
    const storedUser = useLoaderData();
    
    const [user, setUser] = useState(storedUser);

    const handleUpdateUser = event =>{
        event.preventDefault();
        // console.log(user);
        fetch(`http://localhost:5000/users/${storedUser._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data => {
            if (data.modifiedCount > 0){
                toast.success("Update Task successfully");
                event.target.reset();
                //navigate to home page
                window.location.href = '/complete';
                console.log(data);
            }
            
        })
    }

    const handleInputChange = event =>{
        const field = event.target.name;
        const value = event.target.value;
        const newUser = {...user}
        newUser[field] = value;
        setUser(newUser);
    }

    return (
        <div className='py-5'>
            <h2 className='font-bold text-2xl py-5'>Please Update: {storedUser.name}</h2>
            <form onSubmit={handleUpdateUser}>
                <input onChange={handleInputChange} defaultValue={storedUser.name} type="text" placeholder="Enter Your Name" name='name' className="input input-bordered input-md w-full max-w-xs mb-3" required/>
                <br />
                <input onChange={handleInputChange} defaultValue={storedUser.email} type="email" placeholder="Enter Your Email" name='email' className="input input-bordered input-md w-full max-w-xs mb-3" required/>
                <br />
                <input onChange={handleInputChange} defaultValue={storedUser.image} type="text" placeholder="Enter Your Image Url" name='image' className="input input-bordered input-md w-full max-w-xs mb-3" required/>
                <br />
                <textarea onChange={handleInputChange} type="text" className="textarea textarea-success w-1/5 mb-3" placeholder="Your Message" name='textarea'></textarea>
                <br/>
                <button class="btn rounded-none px-8">Update</button>
            </form>
        </div>
    );
};

export default Update;