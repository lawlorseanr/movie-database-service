import React, { useState } from "react";

import Login from './Login.jsx';
import Header from "./Header.jsx";
import List from "./List.jsx";

const App = () => {
  const [list, setList] = useState([]);
  const [session, setSession] = useState("");
  const [isLoggedIn, setLoggedIn] = useState(false);

  if (isLoggedIn) {
    return (
      <div id="app">
        <Header setList={setList} session={session}/>
        <List list={list} />
      </div>
    );
  }

  return (
    <div id="app">
      <Login setLoggedIn={setLoggedIn} setSession={setSession}/>
    </div>
  )

};

export default App;
