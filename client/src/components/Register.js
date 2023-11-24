import { useState } from 'react';

function Register() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const fetchRegister = () => {

        const data = {
            username: username,
            password: password,
        };

        const requestOptions = {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(data),
        };

        fetch(`${process.env.REACT_APP_URL}/api/auth/register`, requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
    }

    return (
      <div className="register">
        <h2>Registration</h2>
        <div className="registerForm">
          <label>Username:</label>
          <input type="text" onChange={(e) => setUsername(e.target.value)}/>
          <label>Password:</label>
          <input name="password" type="password" onChange={(e) => setPassword(e.target.value)}/>
          <button onClick={fetchRegister}>Register</button>
        </div>
      </div>
    );
  }
  
  export default Register;
  