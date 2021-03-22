import React from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { addComment } from "../actions";
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
      axios
        .get(`http://xkcd.com/${num}/info.0.json`)
        .then((res) => {
          let resultObj = {
            alt: res.data.alt,
            img: res.data.img,
            num: res.data.num,
            title: res.data.title,
            comments: [],
          };
          setSelectComic(resultObj);
        })
        .catch((err) => {
          console.log(err);
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
      <div className="container">
        <h1>{selectComic.title}</h1>
        <img
          className="fullComic"
          src={selectComic.img}
          alt={selectComic.alt}
        />
        <p>{selectComic.alt}</p>
        {selectComic.comments &&
          selectComic.comments.map((comment) => (
            <div class="media"> {comment} </div>
          ))}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "30%",
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
              width: "40%",
              padding: "2%",
              margin: "10px",
            }}
            type="submit"
            onClick={() => handleSubmit(comment, num)}
          >
            Add your own caption!
          </button>
        </div>
      </div>
    </div>
  );
};

export default FullComic;
