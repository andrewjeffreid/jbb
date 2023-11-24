import { useState } from 'react';

function Login(props) {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const fetchLogin = () => {
        
        const data = {
            username: username,
            password: password,
        };

        const requestOptions = {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(data),
        };

        fetch(`${process.env.REACT_APP_URL}/api/auth/login`, requestOptions)
        .then(response => response.json())
        .then(result => props.setUser(result))
        .catch(error => console.log('error', error));
    }

    return (
    <div className="login">
        <h2>Login</h2>
        <div className="loginForm">
            <label>Username:</label>
            <input onChange={(e) => setUsername(e.target.value)} type="text" />
            <label>Password:</label>
            <input onChange={(e) => setPassword(e.target.value)} type="password"/>
            <button onClick={fetchLogin}>Login</button>
        </div>
    </div>
    );
}

export default Login;
