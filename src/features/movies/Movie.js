import React, {useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import CircularProgress from '@mui/material/CircularProgress';
import Grid from '@mui/material/Grid';

import { fetchMovieStartAsync } from '../../store/movie/movie.actions';
import { selectMovieMap, selectIsLoading } from '../../store/movie/movie.selector'


export function Movie(movieurl) {
    const dispatch = useDispatch();
    const movieMap = useSelector(selectMovieMap);
    const isLoading = useSelector(selectIsLoading);

    useEffect(() => {
        if (movieurl.movieurl) {
            dispatch(fetchMovieStartAsync(movieurl.movieurl));
        }
        // eslint-disable-next-line
    }, [movieurl]);

    if (isLoading) {
        return (
            <>
                <Grid
                    container
                    spacing={0}
                    direction="column"
                    alignItems="center"
                    justifyContent="center"
                >
                    <Grid item xs={3}>
                        <CircularProgress />
                    </Grid>   
                </Grid> 
            </>
        )
    }

    return (
        <>
            { (movieurl.movieurl !== undefined)
                ? 
                    <FormControl sx={{ m: 1, width: '250px' }}>
                        <TextField id="movie-result" label={movieMap.title + "-" + movieMap.release_date.slice(0,4)} variant="filled" />
                    </FormControl>
                : <div/>

            }
            
        </>
    );
}