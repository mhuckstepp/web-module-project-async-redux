import { useState, useEffect } from "react";
import { fetchComics } from "../actions";
import { useSelector, useDispatch } from "react-redux";
import Comic from "./Comic";

const Comics = () => {
  const [comicNum, setComicNum] = useState(Math.floor(Math.random() * 500));
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  const clickHandler = () => {
    setComicNum(comicNum + 3);
  };

  useEffect(() => {
    dispatch(fetchComics(comicNum));
  }, [comicNum]);

  return (
    <div>
      <button onClick={() => clickHandler()}> Load more comics</button>
      {state.isLoading
        ? "LOADING...."
        : state.comics.map((comic) => {
            return <Comic comic={comic} key={comic.title} />;
          })}
    </div>
  );
};

export default Comics;
