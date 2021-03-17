import { FETCH_SUCCESS, FETCH_FAIL, FETCH_START } from "../actions";

const initialState = {
  comics: [],
  isFetching: false,
  err: "",
};

export const comicReducer = function (state = initialState, action) {
  switch (action.type) {
    case FETCH_SUCCESS:
      return state + 1;
    case FETCH_FAIL:
      return state - 1;
    default:
      return state;
  }
};
