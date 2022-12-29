import React from 'react';
import { Link } from 'react-router-dom';
const Navbar = () => {
    const menuItems = <>
    <div className='lg:space-x-5'>
      <button className="bg-neutral"><li className='font-bold text-base-100'><Link to='/'>Home</Link></li></button>
      <button className="bg-neutral"><li className='font-bold text-base-100'><Link to='/add'>Add Task</Link></li></button>
      <button className="bg-neutral"><li className='font-bold text-base-100'><Link to='/mytask'>My Task</Link></li></button>
      <button className="bg-neutral"><li className='font-bold text-base-100'><Link to='/complete'>Complete Task</Link></li></button>
      </div>
    </>
   
    return (
        <div className="navbar h-20 mb-12 pt-12 bg-base-100">
        <div className="navbar-start">
            <div className="dropdown">
                <label tabIndex={0} className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
                <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                    {menuItems}
                </ul>
            </div>
          
        </div>
        <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal p-0">
                {menuItems}
            </ul>
        </div>
        <div className="navbar-end">
         
        </div>
    </div>
    );
};

export default Navbar;