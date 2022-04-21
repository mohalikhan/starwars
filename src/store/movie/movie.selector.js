import { createSelector } from 'reselect';

const selectMovieReducer = (state) => state.movie;

export const selectMovieMap = createSelector(
    [selectMovieReducer],
    (movieSlice) => movieSlice.results
);

export const selectIsLoading = createSelector(
    [selectMovieReducer],
    (movieSlice) => movieSlice.isLoading
);