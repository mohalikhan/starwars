import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Box from '@mui/material/Box';

import { fetchMovieStartAsync } from '../../store/movie/movie.actions';
import { Movie } from './Movie'

const boxStyles = {
    m: 1,
    border: 1,
    width: '250px',
    borderRadius: '5px',
    borderColor: 'grey.500', 
  };
  

export function Movies({movies}) {
    const dispatch = useDispatch();
    const [movie, setMovie] = useState();

    const handleListItemClick = (event, movie) => {
        dispatch(fetchMovieStartAsync(movie));
        setMovie(movie);
    };

    return (
        <>
            {Array.isArray(movies) 
            ? <Box sx={{ ...boxStyles  }} >
                <List component="nav" aria-label="secondary mailbox folder">
                    {movies.map((movie, index) => {
                        return  (
                            <ListItemButton
                                key={index}
                                onClick={(event) => handleListItemClick(event, movie)}
                            >
                            <ListItemText primary={'Item ' + (index + 1)} />
                            </ListItemButton>
                        );
                    })
                    }
                </List>
              </Box>
        : <div/> 
        }
        {movie ? <Movie/> : <div />}
        </>
    );
}