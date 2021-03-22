import React from "react";
import { Link } from "react-router-dom";

const Comic = (props) => {
  const { comic } = props;

  return (
    <div>
      <div className="cardContainer">
        <div className="card">
          <p className="title is-centered">{comic.title}</p>
          <Link to={`/${comic.num}`}>
            <img
              className="card-image has-image-centered "
              src={comic.img}
              alt={comic.alt}
            />
          </Link>
          <p className="caption">{comic.alt}</p>
        </div>
      </div>
    </div>
  );
};

export default Comic;
