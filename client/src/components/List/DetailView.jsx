/* eslint-disable react/prop-types */
import React from "react";
import moment from "moment";

const poster_url = 'https://image.tmdb.org/t/p/w500';

const DetailView = ({ element }) => {
  return (
    <div className="app-list-detail">
      <div
        className="app-list-detail-image"
        style={{ backgroundImage: `url(${poster_url}${element.backdrop_path})` }}
        alt="Space"
      />
      <div className="app-list-detail-content">
        <h3 className="app-list-detail">Title: </h3>
        <span className="app-list-detail">
          {element.original_title || "Space: the final frontier"}
        </span>
        <h4 className="app-list-detail">Date: </h4>
        <span className="app-list-detail">
          {moment(element.release_date).format("MMMM DD, YYYY")}
        </span>
        <h4 className="app-list-detail">Rating: </h4>
        <span className="app-list-detail">
          {element.vote_average || "5"}/10
        </span>
        <h4 className="app-list-detail">Votes: </h4>
        <span className="app-list-detail">
          {element.vote_count || "10,000"}
        </span>
        <h4 className="app-list-detail">Description: </h4>
        <span className="app-list-detail">
          {element.overview || "Where no person has gone before."}
        </span>
        <h4 className="app-list-detail">Genre IDs: </h4>
        <span className="app-list-detail">
          {element.genre_ids.map((genre, i) => {
            if (i === element.genre_ids.length - 1) {
              return `${genre}`;
            }
            return ` ${genre}, `;
          })}
        </span>
      </div>
    </div>
  );
};

export default DetailView;
