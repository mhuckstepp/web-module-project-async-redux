import { useEffect } from "react";
import { fetchComics } from "../actions";
import { useSelector, useDispatch } from "react-redux";
import Comic from "./Comic";
import InfiniteScroll from "react-infinite-scroll-component";
import "bulma/css/bulma.css";

const Comics = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchComics());
  }, []);

  function fetchMore() {
    dispatch(fetchComics());
  }

  return (
    <div class="columns is-centered">
      {state.isLoading && <div>"LOADING...."</div>}
      {state.error && <div>"ERROR WHILE LOADING"</div>}
      <InfiniteScroll
        dataLength={state.comics.length}
        next={() => fetchMore()}
        hasMore={true}
        loader={<h4>Loading...</h4>}
      >
        {state.comics.map((comic) => {
          return <Comic comic={comic} key={comic.title} />;
        })}
      </InfiniteScroll>
      {/* <button onClick={() => clickHandler()}> Load more comics</button> */}
    </div>
  );
};

export default Comics;
