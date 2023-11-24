import React, { useState } from 'react';
import Login from './components/Login';
import Register from './components/Register';
import Home from './components/Home'
import './app.css'

function App() {

  const [user, setUser] = useState({});
  const [isRegistering, setIsRegistering] = useState(false);

  function router() {

    if (user._id) {
      return <Home user={user}/>
    } else {
      if (!isRegistering) {
        return (
          <div className="loginPage">
            <Login setUser={setUser}/>
            <button onClick={() => setIsRegistering(!isRegistering)}>Registration</button>
          </div>
        )
      } else {
        return (
          <div className="registrationPage">
            <Register />
            <button onClick={() => setIsRegistering(!isRegistering)}>Login</button>
          </div>
        )
      }
    }
  }

  return (
    <div className="App">
      <h1>Just Be Better</h1>
      {router()}
    </div>
  );
}

export default App;
