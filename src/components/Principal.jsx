import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import styled from "styled-components"
import { Container, Grid } from '@mui/material';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import StyledBoxPrincipal from './StyledBoxPrincipal';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { Fragment } from 'react';
import CardsWorkout from '../pages/admin/CardsWorkout';



function Principal() {
  
    return (
        <StyledBoxPrincipal>
          Nossa coleção de discos é como um mapa musical, onde cada vinil marca um ponto de descoberta em uma jornada sem fim. Entre notas e ritmos, exploramos os terrenos sonoros mais variados, criando uma experiência musical que nunca cessa de surpreender e encantar.
        </StyledBoxPrincipal>
    );
}

export default Principal;