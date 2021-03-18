import {
  FETCH_SUCCESS,
  FETCH_FAIL,
  FETCH_START,
  ADD_COMMENT,
} from "../actions";

const initialState = {
  comics: [],
  isFetching: false,
  err: "",
};

export const comicReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_START:
      return {
        ...state,
        isLoading: true,
      };
    case FETCH_SUCCESS:
      return {
        ...state,
        comics: [...state.comics, ...action.payload],
        isLoading: false,
        error: "",
      };
    case FETCH_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    case ADD_COMMENT:
      return {
        ...state,
        comics: state.comics.map((comic) => {
          if (comic.num == action.payload.num) {
            return {
              ...comic,
              comment: [action.payload.comment],
            };
          } else {
            return comic;
          }
        }),
      };
    default:
      return state;
  }
};
