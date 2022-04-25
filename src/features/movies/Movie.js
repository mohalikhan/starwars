import React from 'react';
import { useSelector  } from 'react-redux';

import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import CircularProgress from '@mui/material/CircularProgress';
import Grid from '@mui/material/Grid';

import { selectMovieMap, selectIsLoading } from '../../store/movie/movie.selector'


export function Movie() {
    const movie = useSelector(selectMovieMap);
    const isLoading = useSelector(selectIsLoading);

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
            { movie 
                ?
                <FormControl sx={{ m: 1, width: '250px' }}>
                    <TextField id="movie-result" label={movie.title + "-" + movie.release_date.slice(0,4)} variant="filled" />
                </FormControl>
                :
                <div />
            }
            
        </>
    );
}