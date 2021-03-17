import axios from "axios";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_FAIL = "FETCH_FAIL";
export const FETCH_START = "FETCH_START ";

let urls = [
  `http://xkcd.com/3/info.0.json`,
  `http://xkcd.com/3/info.0.json`,
  `http://xkcd.com/4/info.0.json`,
];

export const fetchComics = (num) => {
  console.log("fetch run");
  return (dispatch) => {
    dispatch({ type: FETCH_START });
    axios
      .all([
        axios.get(`http://xkcd.com/${num}/info.0.json`),
        axios.get(`http://xkcd.com/${num + 1}/info.0.json`),
        axios.get(`http://xkcd.com/${num + 2}/info.0.json`),
      ])
      .then((res) => {
        console.log(res);
        dispatch({ type: FETCH_SUCCESS, payload: res.map((obj) => obj.data) });
      })
      .catch((err) => {
        dispatch({ type: FETCH_FAIL, payload: err });
      });
  };
};
