import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useHistory to manage navigation
import './Login.css';
import Log from '../../assests/log.svg';

const Login = () => {
    const [formData, setFormData] = useState({ email: '', password: '' });
    const history = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        
        // Check if email and password match the specific credentials
        if (formData.email === 'keerthana@gmail.com' && formData.password === '123456') {
            // Navigate to /allIndex if credentials are correct
            history('/home');
        } else {
            // Show an alert for incorrect email or password  
            alert('Email or password is incorrect');
        }
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    return (
        <div className="container">
            <div className="panels">
                <div className="signin">
                    <div className="main">
                        <h1>Login to KCOT</h1>
                        {/* <h2 style={{ marginBottom: "20px" }}>Kumarasamy College</h2> */}
                        <h4 style={{ marginBottom: "20px" }}>Enter your login credentials</h4>
                        <form onSubmit={handleSubmit}>
                            <input
                                type="text"
                                id="email"
                                name="email"
                                placeholder="Email"
                                value={formData.email}
                                onChange={handleInputChange}
                                required
                            />
                            <input
                                type="password"
                                id="password"
                                name="password"
                                placeholder="Password"
                                value={formData.password}
                                onChange={handleInputChange}
                                required
                            />
                            <div className="wrap">
                                <button type="submit">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="panel left-panel">
                    <div className="content">
                        <h3>New here?</h3>
                        <p>An admission management system is a digital solution to manage student enrollments in colleges</p>
                    </div>
                    <img src={Log} className="image" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Login;
