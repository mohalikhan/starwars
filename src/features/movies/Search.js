import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import Select from '@mui/material/Select'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import CircularProgress from '@mui/material/CircularProgress';
import Grid from '@mui/material/Grid';

import { Movies } from './Movies'
import { fetchCharactersStartAsync } from '../../store/characters/characters.actions';
import { resetMovieSelectedAsync } from '../../store/movie/movie.actions';
import { selectCharactersMap, selectIsLoading } from '../../store/characters/characters.selector'

export function Search() {
    const dispatch = useDispatch();
    const charactersMap = useSelector(selectCharactersMap);
    const isLoading = useSelector(selectIsLoading);
    const [character, setCharacter] = useState('');
    const [films, setFilms] = useState();

    useEffect(() => {
        dispatch(fetchCharactersStartAsync());
        // eslint-disable-next-line
    }, []);

    const handleChange = (event) => {
        const name = event.target.value;
        const films = charactersMap.filter(character => character.name === name)[0].films
        dispatch(resetMovieSelectedAsync());
        setCharacter(name);
        setFilms(films);
    };
    
    if (isLoading) {
        return (
                <>
                    <Grid
                        container
                        spacing={0}
                        direction="column"
                        alignItems="center"
                        justifyContent="center"
                        style={{ minHeight: '100vh' }}
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
                    <Grid
                        container
                        spacing={0}
                        direction="column"
                        alignItems="center"
                        justifyContent="center"
                        style={{ minHeight: '100vh' }}
                    >
                        <Grid item xs={3}>
                        <FormControl sx={{ m: 1, width: '250px' }}>
                            <InputLabel id="select-input-character">Character</InputLabel>
                            <Select
                                defaultValue=""
                                labelId="select-character"
                                id="select-character"
                                value={character}
                                label="Character"
                                onChange={handleChange}
                            >
                                {charactersMap.map((data) => {
                                    return <MenuItem key={data.name} value={data.name}>{data.name}</MenuItem>
                                })}
                            </Select>
                            <FormHelperText>Select Character for List of Movies...</FormHelperText>
                            </FormControl>
                            <Movies movies= {films}/>
                        </Grid>   
                    </Grid> 
            </>
    );
}