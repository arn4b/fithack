import React from 'react';

function Signup() {
    return (
        <div className="mycard">
        <div className="card auth-card">
          <h2> Fithack </h2>
          <input
          type="text"
          placeholder="Name"
          />
          <input
          type="text"
          placeholder="Email Address"
          />
          <input
          type="password"
          placeholder="Password"
          />
          <button className="btn waves-effect waves-light #448aff blue accent-2">Signup
          </button>
          <h6>
          </h6>
        </div>
      </div>
    )
}

export default Signup;