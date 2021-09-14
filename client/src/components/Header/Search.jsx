import React, { useState, useEffect } from "react";

import Server from "../../lib/Server.js";

const handleSearch = (search, setList) => {
  const gif = document.getElementById("loading-gif");
  gif.style.opacity = 1;
  Server.get("/api/movies", {
    params: {
      query: search,
      page: 1,
    },
  })
    .then((response) => {
      console.log(response.data.results);
      const list = response.data.results;
      setList(list);
    })
    .catch((error) => console.error(error))
    .finally(() => {
      gif.style.opacity = 0;
    });
}

const Search = ({ setList }) => {
  const [search, setSearch] = useState("");

  useEffect(() => {
    handleSearch(search || 'harry potter', setList);
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
          handleSearch(search, setList);
        }}
      />
    </div>
  );
};

export default Search;
