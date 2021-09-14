import React, { useState } from "react";

import Login from './Login.jsx';
import Header from "./Header.jsx";
import List from "./List.jsx";

const App = () => {
  const [list, setList] = useState([]);
  const [user, setUser] = useState("");
  const [session, setSession] = useState("");
  const [isLoggedIn, setLoggedIn] = useState(false);

  if (isLoggedIn) {
    return (
      <div id="app">
        <Header setList={setList} session={session} user={user} />
        <List list={list} />
      </div>
    );
  }

  return (
    <div id="app">
      <Login setLoggedIn={setLoggedIn} setSession={setSession} setUser={setUser} />
    </div>
  )

};

export default App;
