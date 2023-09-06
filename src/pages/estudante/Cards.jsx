import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box, Grid } from '@mui/material';
import styled from 'styled-components';
import { useState } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { useContext } from 'react';
import CardsDisco from '../../pages/admin/CardsDisco';
import { Fragment } from 'react';


function Cards() {

    const StyledBox = styled(Box)`
    height: 25vh; 
    margin-left: 2rem;
    margin-top: 3rem;
`

    const StyledButton = styled(Button)`
        width: 40vw;
        
    `


    const { userExercises } = useContext(AuthContext);

    return (
        <>
            <Grid container spacing={4}>
                {userExercises && userExercises.length > 0 ? (
                    userExercises.map((item, index) => (
                        <Fragment key={index}>
                            {item.group && (
                                <Grid item>
                                    <CardsWorkout item={item} />
                                </Grid>
                            )}
                        </Fragment>
                    ))
                ) : (
                    <Grid item sx={{color: 'black', fontSize: '2rem'}}>
                        <p>Não há discos cadastrados</p>
                    </Grid>
                )}
            </Grid>

        </>
    )



}

export default Cards;