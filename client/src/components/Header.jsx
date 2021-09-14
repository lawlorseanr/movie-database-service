import React from "react";
import PropTypes from "prop-types";
import moment from "moment";

import Title from "./Header/Title.jsx";
import Search from "./Header/Search.jsx";

const Header = ({ setList }) => {
  return (<div id="app-header">
    <Title />
    <Search setList={setList} />
  </div>
  );
};

export default Header;
