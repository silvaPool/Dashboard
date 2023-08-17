import Box from '@mui/material/Box';
import Elvis from '../assets/images/elvis.jpg';
import Boneco from '../assets/images/bonecorockeiro.jpg';
import { styled } from '@mui/system';
import { Button, Stack, Typography } from '@mui/material';
import { Outlet, useNavigate } from 'react-router-dom';
import StyledBoxHeader from '../components/StyledBoxHeader';
import StyledBoxUsuario from '../components/StyledBoxUsuario';



const Basic = () => {

    const navigate = useNavigate();

    return (
        <>
            <StyledBoxHeader sx={{ display: 'flex', flexDirection:'column', height: '100vh', padding: '1rem' }}>

                {/* <Box>
                    <img src={Boneco} alt="Imagem do elvis" width="800vw" height="100vh" />
                </Box> */}

                <Box>
                    <div class="container">
                        <div class="content">
                            <div class="content__container">
                                <p class="content__container__text">
                                    Hello
                                </p>

                                <ul class="content__container__list">
                                    <li class="content__container__list__item">rocker</li>
                                    <li class="content__container__list__item">groupie</li>
                                    <li class="content__container__list__item">usuário</li>
                                    <li class="content__container__list__item">rockstar</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </Box>

                <StyledBoxUsuario>

                    <Stack spacing={4} >
                        <Typography variant='h1' sx={{ fontSize: '2rem', borderLeft: '2px solid white', padding: '5px', color: 'white' }}>
                            Fallen Angels
                        </Typography>


                    </Stack>
                    <Stack display={"flex"} flexDirection={"row"} mb={'1rem'}>
                        <Typography variant='h1' sx={{ fontSize: '1.5rem', borderBottom: '1px solid white' }} >
                            <Button onClick={() => navigate("/auth/usuario")}>Entrar</Button>
                        </Typography>
                        <Typography variant='h1' sx={{ fontSize: '1.5rem', marginLeft: '1rem', borderBottom: '1px solid white' }}>
                            <Button onClick={() => navigate("/auth/cadastro")}>Registrar</Button>
                        </Typography>
                    </Stack>


                    <Outlet />



                </StyledBoxUsuario>
            </StyledBoxHeader>

            {/* <StyledBox>
                <Box>

                    <Box sx={{ display: 'flex', marginBottom: '3rem' }}>
                        <Typography variant='h1' fontSize={'2rem'} sx={{ borderBottom: '3px solid black', marginRight: '2rem', height: '4vh' }}>
                            <Button onClick={() => navigate("/auth/usuario")}>Entrar</Button>
                        </Typography>
                        <Typography variant='h1' fontSize={'2rem'} sx={{ borderBottom: '3px solid black', height: '4vh' }}>
                            <Button onClick={() => navigate("/cadastro")}>Registrar</Button>
                        </Typography>
                    </Box>

                    <Box>
                        <Outlet />
                    </Box>

                </Box>

            </StyledBox> */}

        </>
    );
};
export default Basic;