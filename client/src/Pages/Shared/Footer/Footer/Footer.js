import React from 'react';
import {Link} from 'react-router-dom';
const Footer = () => {
    return (
        <footer className="footer p-32 bg-black text-white">
        <div>
            
            <p>Task-Management Industries Ltd.<br/>Providing reliable tech since 2020</p>
        </div>
        <div>
            <span className="footer-title">Services</span>
            <Link to="/"className="link link-hover">View Task</Link>
            <Link to="/add"className="link link-hover">Add Task</Link>
            <Link to="/complete"className="link link-hover">Complete Task</Link>
          
        </div>
        <div>
            <span className="footer-title">Company</span>
            <Link to="/login"className="link link-hover"> Login </Link>
            <Link to="/register"className="link link-hover"> Register </Link>
            <Link to="/login"className="link link-hover">Jobs</Link>
            
        </div>
        <div>
            <span className="footer-title">Legal</span>
            <Link to="/login"className="link link-hover">Terms of use</Link>
            <Link to="/login"className="link link-hover">Privacy policy</Link>
            <Link to="/login"className="link link-hover">Cookie policy</Link>
        </div>
    </footer>
    );
};

export default Footer;