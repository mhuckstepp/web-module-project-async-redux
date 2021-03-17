import axios from "axios";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_FAIL = "FETCH_FAIL";
export const FETCH_START = "FETCH_START ";

export const fetchComics = () => {
  return (dispatch) => {
    dispatch({ type: FETCH_START });
    axios
      .get("http://xkcd.com/info.0.json")
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };
};
