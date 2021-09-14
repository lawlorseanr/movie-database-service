import React from "react";
import moment from "moment";

const poster_url = 'https://image.tmdb.org/t/p/w500';

const SummaryView = ({ element }) => {
  return (
    <div className="app-list-summary">
      <div
        className="app-list-summary-thumbnail"
        style={{ backgroundImage: `url(${poster_url}${element.backdrop_path})` }}
        alt="Space"
      />
      <div className="app-list-summary-title">
        <h2 className="app-list-summary-title-text">Title:</h2>
        <span className="app-list-summary-title-text">
          {element.original_title || "Space: the final frontier"}
        </span>
        <h3 className="app-list-summary-title-date">Release Date: </h3>
        <span className="app-list-summary-title-date">
          {moment(element.release_date).format("MMMM YYYY") ||
            "Eons ago..."}
        </span>
      </div>
    </div>
  );
};

export default SummaryView;
