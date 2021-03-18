import axios from "axios";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_FAIL = "FETCH_FAIL";
export const FETCH_START = "FETCH_START";
export const ADD_COMMENT = "ADD_COMMENT";

export const fetchComics = () => {
  let num = Math.ceil(Math.random() * 700);
  return (dispatch) => {
    dispatch({ type: FETCH_START });
    axios
      .all([
        axios.get(`http://xkcd.com/${num}/info.0.json`),
        axios.get(`http://xkcd.com/${num + 1}/info.0.json`),
      ])
      .then((res) => {
        dispatch({
          type: FETCH_SUCCESS,
          payload: res.map((obj) => {
            return {
              alt: obj.data.alt,
              img: obj.data.img,
              num: obj.data.num,
              title: obj.data.title,
              comments: [],
            };
          }),
        });
      })
      .catch((err) => {
        dispatch({ type: FETCH_FAIL, payload: err });
      });
  };
};

export const addComment = (comment, num) => {
  console.log({ type: ADD_COMMENT, payload: { comment: comment, num: num } });
  return { type: ADD_COMMENT, payload: { comment: comment, num: num } };
};
