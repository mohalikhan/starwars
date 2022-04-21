import { combineReducers } from 'redux';

import { charactersReducer } from './characters/characters.reducer';
import { movieReducer } from './movie/movie.reducer';

export const rootReducer = combineReducers({
  characters: charactersReducer,
  movie: movieReducer,
});