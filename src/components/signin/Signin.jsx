import React from 'react';
import './Signin.css';

const Signin = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="container">
      <head>
        <title>Kumarasamy College of Technlogy</title>
      </head>
      <body>
        <div className="main">
          <h1>Kumarasamy College</h1>
          <h3>Enter your login credentials</h3>
          <form onSubmit={handleSubmit}>
            {/* <label htmlFor="first">
              
            </label> */}
            <input
              type="text"
              id="first"
              name="first"
              placeholder="Enter your Username"
              required
            />
{/* 
            <label htmlFor="password">
              
            </label> */}
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your Password"
              required
            />
            <div className="wrap">
              <button type="submit">
                Submit
              </button>
            </div>
          </form>
        </div>
      </body>
    </div>
  );
}

export default Signin;
