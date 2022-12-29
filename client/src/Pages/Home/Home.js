import React from 'react';
import { Link } from 'react-router-dom';
const Home = () => {
    return (
        <div className='py-14'>
            <h1 className='py-10 font-bold text-2xl'>Add Your Daily Task</h1>
            <Link to='/mytask'><button class="btn rounded-none px-16">Enter</button></Link>
        </div>
    );
};

export default Home;