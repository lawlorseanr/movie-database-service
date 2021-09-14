import React from "react";
import PropTypes from "prop-types";

const Title = () => {
  return (
    <div id="app-header-title">
      <h1>The Movie Database</h1>
      <img id="loading-gif" src="./assets/spiffygif_46x46.gif" alt="Spinner" />
    </div>
  );
};

Title.propTypes = {};

export default Title;
