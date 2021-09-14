import React from "react";
import PropTypes from "prop-types";
import moment from "moment";

import Title from "./Header/Title.jsx";
import Search from "./Header/Search.jsx";

const Header = ({ setList, session, user }) => {
  return (<div id="app-header">
    <Title user={user} />
    <Search setList={setList} session={session} />
  </div>
  );
};

export default Header;
