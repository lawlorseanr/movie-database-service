import React from "react";
import PropTypes from "prop-types";

const Title = ({ user }) => {
  return (
    <div id="app-header-title">
      <h1>The Movie Database</h1>
      <img id="loading-gif" src="./assets/spiffygif_46x46.gif" alt="Spinner" />
      <span>Logged in as: <b>{user}</b></span>
    </div>
  );
};

Title.propTypes = {};

export default Title;
