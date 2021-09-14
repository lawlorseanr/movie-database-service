import React, { useState, useEffect } from "react";

import Server from "../../lib/Server.js";

const handleSearch = (query, session, setList) => {
  const gif = document.getElementById("loading-gif");
  gif.style.opacity = 1;
  const data = { Authorization: session };
  Server.post("/api/movies", data,
    { params: { query } },
  )
    .then((response) => {
      const list = response.data.results;
      setList(list);
    })
    .catch((error) => console.error({ error: 'Error querying server' }))
    .finally(() => {
      gif.style.opacity = 0;
    });
}

const Search = ({ setList, session }) => {
  const [search, setSearch] = useState("harry potter");

  useEffect(() => {
    if (session) {
      handleSearch(search, session, setList);
    }
  }, [search])

  return (
    <div id="app-header-search">
      <label htmlFor="search-input">
        Search the movie database:
        <input
          type="text"
          id="search-input"
          name="search-input"
          placeholder="harry potter"
          onChange={(e) => setSearch(e.target.value)}
        />
      </label>
      <input
        type="button"
        id="search-button"
        value="Search"
        onClick={(e) => {
          e.preventDefault();
          handleSearch(search, session, setList);
        }}
      />
    </div>
  );
};

export default Search;
