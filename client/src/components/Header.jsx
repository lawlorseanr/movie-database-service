import React from "react";
import PropTypes from "prop-types";
import moment from "moment";

import Title from "./Header/Title.jsx";
import Search from "./Header/Search.jsx";

import Server from "../lib/Server.js";

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};

    this.setList = props.setList;
    this.handleSearch = this.handleSearch.bind(this);
  }

  componentDidMount() {
    this.handleSearch("Harry Potter");
  }

  handleSearch(search) {
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
        this.setList(list);
      })
      .catch((error) => console.error(error))
      .finally(() => {
        gif.style.opacity = 0;
      });
  }

  render() {
    return (
      <div id="app-header">
        <Title />
        <Search handleSearch={this.handleSearch} />
      </div>
    );
  }
}

Header.propTypes = {
  setList: PropTypes.func.isRequired,
};

export default Header;
