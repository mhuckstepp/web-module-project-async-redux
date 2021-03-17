import { FETCH_SUCCESS, FETCH_FAIL, FETCH_START } from "../actions";

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
        comics: [...action.payload, ...state.comics],
        isLoading: false,
        error: "",
      };
    case FETCH_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
