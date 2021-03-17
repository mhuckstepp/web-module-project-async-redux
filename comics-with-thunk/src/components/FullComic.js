import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

const FullComic = () => {
  let { num } = useParams();
  const comics = useSelector((state) => state.comics);
  const [selectComic, setSelectComic] = useState([{}]);

  useEffect(() => {
    comics.forEach((comic) => {
      if (comic.num == num) {
        setSelectComic(comic);
      }
    });
  }, [num, comics]);

  console.log(selectComic);

  return (
    <div>
      <h1>{selectComic.title}</h1>
      <img
        style={{ maxHeight: "550px" }}
        src={selectComic.img}
        alt={selectComic.alt}
      />
      <p>{selectComic.alt}</p>
    </div>
  );
};

export default FullComic;
