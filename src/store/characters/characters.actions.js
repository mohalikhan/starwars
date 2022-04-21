import { CHARACTERS_ACTION_TYPES } from './characters.types';
import { createAction } from '../../utils/reducer/reducer.utils';

import { getCharacters } from '../../utils/fetch/fetch.utils';

export const fetchCharactersStart = () =>
  createAction(CHARACTERS_ACTION_TYPES.FETCH_CHARACTERS_START);

export const fetchCharactersSuccess = (results) =>
  createAction(
    CHARACTERS_ACTION_TYPES.FETCH_CHARACTERS_SUCCESS,
    results
  );

export const fetchCharactersFailure = (error) =>
  createAction(CHARACTERS_ACTION_TYPES.FETCH_CHARACTERS_FAILED, error);

export const fetchCharactersStartAsync = () => {
  return async (dispatch) => {
    dispatch(fetchCharactersStart());
    try {
      const results = await getCharacters();
      dispatch(fetchCharactersSuccess(results));
    } catch (error) {
      dispatch(fetchCharactersFailure(error));
    }
  };
};