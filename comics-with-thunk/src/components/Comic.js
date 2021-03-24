import React from "react";
import { Link } from "react-router-dom";

const Comic = (props) => {
  const { comic } = props;

  return (
    <div>
      <Link to={`/${comic.num}`}>
        <div className=" rounded bg-white shadow m-8 p-8 flex flex-col items-center max-w-screen-xl">
          <h2 className="text-4xl mb-8">{comic.title}</h2>
          <p className="text-l mb-4"># {comic.num}</p>

          <img className="mb-4" src={comic.img} alt={comic.alt} />

          <p className="text-xl m-4">{comic.alt}</p>
        </div>
      </Link>
    </div>
  );
};

export default Comic;
