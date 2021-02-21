import React, {useState} from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = () => {
    console.log('Clicked');
    console.log(email);
    console.log(password);
  };
    return(
        <div className="mycard">
        <div className="card auth-card">
          <h2> Fithack </h2>
          <input
          type="text"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          />
          <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          />
          <button className="btn waves-effect waves-light #448aff blue accent-2" onClick={() => onSubmit()}>
          Login
          </button>
        </div>
      </div>
    )
}

export default Login;