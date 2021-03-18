import React from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { addComment } from "../actions";

const FullComic = () => {
  let { num } = useParams();
  const comics = useSelector((state) => state.comics);
  const [selectComic, setSelectComic] = useState([{}]);
  const [comment, setComment] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    comics.forEach((comic) => {
      if (comic.num == num) {
        setSelectComic(comic);
      }
    });
  }, [num, comics]);

  const handleChange = (e) => {
    setComment(e.target.value);
  };

  const handleSubmit = (comment, num) => {
    dispatch(addComment(comment, num));
  };

  return (
    <div>
      <h1>{selectComic.title}</h1>
      <img
        style={{ maxHeight: "550px" }}
        src={selectComic.img}
        alt={selectComic.alt}
      />
      <p>{selectComic.alt}</p>
      <label>
        {" "}
        comments
        <textarea name="comment" type="text" onChange={handleChange}></textarea>
      </label>
      <button type="submit" onClick={() => handleSubmit(comment, num)}>
        submit
      </button>
      {selectComic.comment && <div>{selectComic.comment}</div>}
    </div>
  );
};

export default FullComic;
