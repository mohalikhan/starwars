import { createSelector } from 'reselect';

const selectCharactersReducer = (state) => state.characters;

export const selectCharactersMap = createSelector(
    [selectCharactersReducer],
    (charactersSlice) => charactersSlice.results
);

export const selectIsLoading = createSelector(
    [selectCharactersReducer],
    (charactersSlice) => charactersSlice.isLoading
);