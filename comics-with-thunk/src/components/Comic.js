import React from "react";
import { Link } from "react-router-dom";

const Comic = (props) => {
  const { comic } = props;

  return (
    <div>
      <h1>{comic.title}</h1>
      <Link to={`/${comic.num}`}>
        <img style={{ maxHeight: "250px" }} src={comic.img} alt={comic.alt} />
      </Link>
      <p>{comic.alt}</p>
    </div>
  );
};

export default Comic;
