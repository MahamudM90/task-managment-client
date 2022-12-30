import React from 'react';
import { useState } from 'react';
import toast from "react-hot-toast";
const AddTask = () => {
    const [user, setUser] = useState({});

    const handleAddUser = event =>{
        event.preventDefault();
        console.log(user);

        fetch('http://localhost:5000/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data => {
            if(data.acknowledged){
                toast.success("Added Task successfully");
                event.target.reset();
                //navigate to media page
                window.location.href = '/media';
            }
        })
    }

    const handleInputBlur = event =>{
        const field = event.target.name;
        const value = event.target.value;
        const newUser = {...user}
        newUser[field] = value;
        setUser(newUser);
    }

    return (
        <div className='py-5'>
            <h1 className='font-bold text-2xl py-5'>Please add Your task here</h1>
            <form onSubmit={handleAddUser}>
            <input onBlur={handleInputBlur} type="text" placeholder="Enter Your Name" name='name' className="input input-bordered input-md w-full max-w-xs mb-3" required/>
                <br />
                <input onBlur={handleInputBlur} type="email" placeholder="Enter Your Email" name='email' className="input input-bordered input-md w-full max-w-xs mb-3" required/>
                <br />
                <input onBlur={handleInputBlur} type="text" placeholder="Enter Your Image Url" name='image' className="input input-bordered input-md w-full max-w-xs mb-3 " required/>
                <br />
                <textarea onBlur={handleInputBlur} type="text" className="textarea textarea-success w-1/5 mb-3" placeholder="Your Message" name='textarea'></textarea>
                <br/>
                <button class="btn rounded-none px-8">Submit</button>
            </form>
        </div>
    );
};

export default AddTask;