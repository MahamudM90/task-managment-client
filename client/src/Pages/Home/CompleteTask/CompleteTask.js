import React from 'react';
import { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { RiDeleteBin6Line } from 'react-icons/ri';
const CompleteTask = () => {
    const users = useLoaderData();
    const [displayUsers, setDisplayUsers] = useState(users);

    const handleDelete = user => {
        const agree = window.confirm(`Are you sure you want to delete: ${user.name}`);

        if (agree) {
            // console.log('deleting user with id: ', user._id)
            fetch(`http://localhost:5000/users/${user._id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    // console.log(data)
                    if (data.deletedCount > 0) {
                        alert('User deleted successfully.');
                        const remainingUsers = displayUsers
                            .filter(usr => usr._id !== user._id);
                        setDisplayUsers(remainingUsers);
                    }
                });
        }
    }

    return (
        <div>
            <h2 className='font-bold text-2xl'>Total-Task: {displayUsers.length}</h2>
            <div>
                {
                    displayUsers.map(user => <p key={user._id}>
                            <div className='grid justify-center justify-items-center my-20 ' >
                                <div className='flex gap-6'>
                            <div className="card w-96 bg-base-100 shadow-xl">
                         <figure><img src={user.image} alt="Shoes" /></figure>
                             <div className="card-body">
                        <h2 className="text-center font-semibold">{user.textarea}</h2>
                        <div className='flex justify-center items-center'>
                  <div className="card-actions d-flex justify-center items-center gap-5">
                  <Link to='/details'> <button className="btn rounded-none px-8 mt-5">Details</button> </Link>
                  <button className="btn rounded-none px-8 mt-5"
                            onClick={() => handleDelete(user)}
                        ><RiDeleteBin6Line/></button>
                             <Link to='/mytask'> <button className="btn rounded-none px-5">Not Completed</button></Link>
                      </div>    
                      </div>
                      </div>
                      </div>
                      </div>
                      <div className='py-5'>
                      <textarea type="text" className="textarea textarea-success" placeholder="Your Comment" name='textarea'></textarea>
                      <br/>
                       <div className='py-2'>
                        <button class="btn rounded-none px-5 ">Comment</button>
                        </div>
                 
                      </div>
                      </div>
                  

                    </p>)
                }
            </div>
        </div>
    );
};

export default CompleteTask;