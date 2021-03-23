import React from "react";
import { useParams, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
// import { addComment } from "../actions";
import axios from "axios";

const FullComic = () => {
  let { num } = useParams();
  num = Number(num);
  const comics = useSelector((state) => state.comics);
  const [selectComic, setSelectComic] = useState([{}]);
  let history = useHistory();
  // const [comment, setComment] = useState("");
  // const dispatch = useDispatch();

  const handleNext = () => {
    console.log(`/${num + 1}`);
    history.push(`/${num + 1}`);
  };

  const handleLast = () => {
    history.push(`/${num - 1}`);
  };

  useEffect(() => {
    // Checks comics array is populated and includes the number we are looking for.
    if (comics.length > 0 && comics.map((comic) => comic.num).includes(num)) {
      console.log(num);
      comics.forEach((comic) => {
        if (comic.num == num) {
          setSelectComic(comic);
        }
      });
      // if we dont find existing array we go and 'get' it
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

  // const handleChange = (e) => {
  //   setComment(e.target.value);
  // };

  // const handleSubmit = (comment, num) => {
  //   if (comment) {
  //     dispatch(addComment(comment, num));
  //     setComment("");
  //   }
  // };

  return (
    <div>
      <div className="flex flex-col items-center w-full ">
        <div className="flex">
          <button
            className="bg-gradient-to-r mr-12 p-4 from-blue-500 rounded font-bold"
            onClick={() => handleLast()}
          >
            Previous
          </button>
          <button
            className="bg-gradient-to-l ml-6 p-4 from-blue-500 rounded font-bold"
            onClick={() => handleNext()}
          >
            Next
          </button>
        </div>
        <h1 className="text-7xl mb-8">{selectComic.title}</h1>
        <img
          className="max-w-screen-xl max-h-screen"
          src={selectComic.img}
          alt={selectComic.alt}
        />
        <p className="text-2xl mt-16 w-9/12">{selectComic.alt}</p>
        <p className="text-l my-4"># {selectComic.num}</p>

        {/* {selectComic.comments &&
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
        </div> */}
      </div>
    </div>
  );
};

export default FullComic;
