import { MOVIE_ACTION_TYPES } from './movie.types';

export const MOVIE_INITIAL_STATE = {
  results: null,
  isLoading: false,
  error: null,
};

export const movieReducer = (
  state = MOVIE_INITIAL_STATE,
  action = {}
) => {
  const { type, payload } = action;

  switch (type) {
    case MOVIE_ACTION_TYPES.FETCH_MOVIE_START:
      return {
        ...state,
        isLoading: true,
      };
    case MOVIE_ACTION_TYPES.FETCH_MOVIE_SUCCESS:
      return { ...state, isLoading: false, results: payload };
    case MOVIE_ACTION_TYPES.FETCH_MOVIE_FAILED:
      return { ...state, isLoading: false, error: payload };
    case MOVIE_ACTION_TYPES.RESET_MOVIE_SELECTED:
        return {...state, results: null };  
    default:
      return state;
  }
};