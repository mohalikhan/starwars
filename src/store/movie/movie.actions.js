import { MOVIE_ACTION_TYPES } from './movie.types';
import { createAction } from '../../utils/reducer/reducer.utils';

import { getMovie } from '../../utils/fetch/fetch.utils';

export const fetchMovieStart = () =>
  createAction(MOVIE_ACTION_TYPES.FETCH_MOVIE_START);

export const fetchMovieSuccess = (results) =>
  createAction(
    MOVIE_ACTION_TYPES.FETCH_MOVIE_SUCCESS,
    results
  );

export const fetchMovieFailure = (error) =>
  createAction(MOVIE_ACTION_TYPES.FETCH_MOVIE_FAILED, error);

export const fetchMovieStartAsync = (url) => {
  return async (dispatch) => {
    dispatch(fetchMovieStart());
    try {
      const results = await getMovie(url);
      dispatch(fetchMovieSuccess(results));
    } catch (error) {
      dispatch(fetchMovieFailure(error));
    }
  };
};

export const resetMovieSelectedAsync = () => {
  return async (dispatch) => {
    dispatch({ type: MOVIE_ACTION_TYPES.RESET_MOVIE_SELECTED });
  }
}