import { movieReducer, MOVIE_INITIAL_STATE } from './movie/movie.reducer'
import { MOVIE_ACTION_TYPES } from './movie/movie.types'
import { charactersReducer, CHARACTERS_INITIAL_STATE } from './characters/characters.reducer'
import { CHARACTERS_ACTION_TYPES } from './characters/characters.types'

describe('movie reducer tests', () => {
    const state = MOVIE_INITIAL_STATE
    it('should return the initial state', () => {
       expect(movieReducer(undefined, {})).toEqual(state) 
    })

    it('should handle FETCH_MOVIE_START', () => {
        expect(movieReducer(MOVIE_INITIAL_STATE, {
          type:  MOVIE_ACTION_TYPES.FETCH_MOVIE_START,
        })).toEqual({...state, isLoading: true}) 
    })

    it('should handle FETCH_MOVIE_SUCCESS', () => {
        expect(movieReducer(MOVIE_INITIAL_STATE, {
          type:  MOVIE_ACTION_TYPES.FETCH_MOVIE_SUCCESS,
          payload: 'abc'
        })).toEqual({...state, results: "abc"}) 
    })

    it('should handle FETCH_MOVIE_FAILED', () => {
        expect(movieReducer(MOVIE_INITIAL_STATE, {
          type:  MOVIE_ACTION_TYPES.FETCH_MOVIE_FAILED,
          payload: 'abc'
        })).toEqual({...state, error: "abc"}) 
    })

    it('should handle RESET_MOVIE_SELECTED', () => {
      expect(movieReducer(undefined, {
        type:  MOVIE_ACTION_TYPES.RESET_MOVIE_SELECTED,
      })).toEqual({...state, results: null}) 
  })
})

describe('characters reducer tests', () => {
    const state = CHARACTERS_INITIAL_STATE
    it('should return the initial state', () => {
       expect(charactersReducer(undefined, {})).toEqual(state) 
    })

    it('should handle FETCH_CHARACTERS_START', () => {
        expect(charactersReducer(MOVIE_INITIAL_STATE, {
          type:  CHARACTERS_ACTION_TYPES.FETCH_CHARACTERS_START,
        })).toEqual({...state, isLoading: true, results: null}) 
    })

    it('should handle FETCH_CHARACTERS_SUCCESS', () => {
        expect(charactersReducer(MOVIE_INITIAL_STATE, {
          type:  CHARACTERS_ACTION_TYPES.FETCH_CHARACTERS_SUCCESS,
          payload: 'abc'
        })).toEqual({...state, results: "abc"}) 
    })

    it('should handle FETCH_CHARACTERS_FAILED', () => {
        expect(charactersReducer(MOVIE_INITIAL_STATE, {
          type:  CHARACTERS_ACTION_TYPES.FETCH_CHARACTERS_FAILED,
          payload: 'abc'
        })).toEqual({...state, error: "abc", results: null}) 
    })
})
