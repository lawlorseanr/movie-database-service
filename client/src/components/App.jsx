import React, { useState } from "react";

import Header from "./Header.jsx";
import List from "./List.jsx";

const App = () => {
  const [list, setList] = useState([]);

  return (
    <div id="app">
      <Header setList={setList} />
      <List list={list} />
    </div>
  );
};

export default App;
