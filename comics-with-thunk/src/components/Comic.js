import React from "react";
import { Link } from "react-router-dom";
import "bulma/css/bulma.css";

const Comic = (props) => {
  const { comic } = props;

  return (
    <div>
      <p class="title comic">{comic.title}</p>
      <Link to={`/${comic.num}`}>
        <img
          class="image has-image-centered "
          src={comic.img}
          alt={comic.alt}
        />
      </Link>
      <p>{comic.alt}</p>
    </div>
  );
};

export default Comic;
