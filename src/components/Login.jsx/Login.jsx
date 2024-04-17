import React from 'react';
import './Login.css';
import Log from '../../assests/log.svg'

const Login = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
      };
    return (
        <div className="container">
            <div className="panels">
                <div class="signin">
                    <div className="main">
                        <h1>Login to KCOT</h1>
                        <h2 style={{ marginBottom: "20px" }}>Kumarasamy College</h2>
                        <h4 style={{ marginBottom: "20px" }}>Enter your login credentials</h4>
                        <form onSubmit={handleSubmit}>
                            <input
                                type="text"
                                id="first"
                                name="first"
                                placeholder="Username"
                                required
                            />
                            <input
                                type="password"
                                id="password"
                                name="password"
                                placeholder="Password"
                                required
                            />
                            <div className="wrap">
                                <button type="submit">
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="panel left-panel">
                    <div className="content">
                        <h3>New here?</h3>
                        <p>An admission management system is a digital solution to manage student enrollments in colleges</p>
                        {/* <button className="btn transparent" id="sign-up-btn">Sign Up</button> */}
                    </div>
                    <img src={Log} className="image" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Login;
