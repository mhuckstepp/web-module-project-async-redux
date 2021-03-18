import React from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { addComment } from "../actions";
import "bulma/css/bulma.css";
import axios from "axios";

const FullComic = () => {
  let { num } = useParams();
  const comics = useSelector((state) => state.comics);
  const [selectComic, setSelectComic] = useState([{}]);
  const [comment, setComment] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    if (comics.length > 0) {
      comics.forEach((comic) => {
        if (comic.num == num) {
          setSelectComic(comic);
        }
      });
    } else {
      axios.get(`http://xkcd.com/${num}/info.0.json`).then((res) => {
        let resultObj = {
          alt: res.data.alt,
          img: res.data.img,
          num: res.data.num,
          title: res.data.title,
          comments: [],
        };
        setSelectComic(resultObj);
      });
    }
  }, [num, comics]);

  const handleChange = (e) => {
    setComment(e.target.value);
  };

  const handleSubmit = (comment, num) => {
    if (comment) {
      dispatch(addComment(comment, num));
      setComment("");
    }
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
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "30%",
          margin: "0 auto",
        }}
        class="columns"
      >
        <textarea
          class="textarea is-small"
          style={{
            width: "30%",
            margin: "30px auto 10px",
            textAlign: "center",
          }}
          name="comment"
          placeholder="add your own caption"
          type="text"
          onChange={handleChange}
          value={comment}
        ></textarea>

        <button
          class="button is-small is-info"
          style={{
            width: "30%",
          }}
          type="submit"
          onClick={() => handleSubmit(comment, num)}
        >
          Add your own caption!
        </button>
        {selectComic.comments &&
          selectComic.comments.map((comment) => (
            <div class="media"> {comment} </div>
          ))}
      </div>
    </div>
  );
};

export default FullComic;
