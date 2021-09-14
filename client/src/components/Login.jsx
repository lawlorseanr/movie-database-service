import React, { useState } from 'react';

import Server from '../lib/Server.js';
import hash from '../lib/hashUtils.js';

const Login = ({ setLoggedIn, setSession }) => {
  const [username, setUsername] = useState("");
  const [rawPassword, setPassword] = useState("");

  return (
    <div id='login'>
      <label htmlFor="username">Username:</label>
      <input type="text" id="username" name="username" required size="10"
        onChange={(e) => setUsername(e.target.value)} />
      <label htmlFor="password">Password:</label>
      <input type="password" id="password" name="password" required size="10"
        onChange={(e) => setPassword(e.target.value)} />
      <button type="Submit" onClick={(e) => {
        e.preventDefault();
        const password = hash(rawPassword);
        Server.post('/validate', { username, password })
          .then((response) => {
            const { data } = response;
            if (data.session) {
              setUsername("");
              setPassword("");
              setSession(data.session);
              setLoggedIn(true);
            } else {
              console.log('Invalid credentials provided.');
            }
          })
          .catch((error) => {
            console.log({ error });
          })
      }}>Login</button>
    </div>
  );
};

export default Login;
